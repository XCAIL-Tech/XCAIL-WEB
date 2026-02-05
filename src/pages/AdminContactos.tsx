import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

interface ContactRow {
  id: number;
  created_at: string;
  name: string;
  email: string;
  institution: string | null;
  subject: string;
  message: string;
  status: string;
}

export default function AdminContactos() {
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "new" | "reviewed" | "closed">("all");
  const [selected, setSelected] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const navigate = useNavigate();

  // Verificar sesión
  useEffect(() => {
    if (!sessionStorage.getItem("xcail_admin")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Traer contactos
  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error al traer contactos:", error);
      } else {
        setContacts(data);
      }
      setLoading(false);
    };
    fetchContacts();
  }, []);

  // Cambiar status
  const updateStatus = async (id: number, newStatus: string) => {
    const { error } = await supabase
      .from("contacts")
      .update({ status: newStatus })
      .eq("id", id);

    if (!error) {
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
      );
    }
  };

  // Eliminar contacto
  const deleteContact = async (id: number) => {
    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (!error) {
      setContacts((prev) => prev.filter((c) => c.id !== id));
      setSelected(null);
      setConfirmDelete(null);
    }
  };

  // Copiar email
  const copyEmail = (email: string, id: number) => {
    navigator.clipboard.writeText(email);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  // Cerrar sesión
  const handleLogout = () => {
    sessionStorage.removeItem("xcail_admin");
    navigate("/admin/login");
  };

  // Filtrar
  const filtered =
    filter === "all" ? contacts : contacts.filter((c) => c.status === filter);

  // Colores por status
  const statusColor: Record<string, string> = {
    new: "bg-green-900/40 text-green-400 border-green-600",
    reviewed: "bg-yellow-900/40 text-yellow-400 border-yellow-600",
    closed: "bg-gray-700/40 text-gray-400 border-gray-600",
  };

  const statusLabel: Record<string, string> = {
    new: "Nuevo",
    reviewed: "Revisado",
    closed: "Cerrado",
  };

  // Formatear fecha
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Navbar admin */}
      <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/media/logos/xcail-logo.png"

              alt="XCAIL"
              className="h-8 w-auto"
            />
            <span className="text-sm text-muted-foreground">/ Panel Admin</span>
          </div>
          <Button
            variant="outline"
            className="text-sm border-gray-600 text-muted-foreground hover:text-white"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </div>
      </nav>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">

        {/* Header + filtros */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Contactos</h1>
          <div className="flex gap-2 flex-wrap">
            {(["all", "new", "reviewed", "closed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                  filter === f
                    ? "bg-[#fca311] text-black"
                    : "bg-muted text-muted-foreground hover:text-white"
                }`}
              >
                {f === "all" ? "Todos" : statusLabel[f]}
              </button>
            ))}
          </div>
        </div>

        {/* Contador */}
        <div className="flex gap-4 text-sm">
          <span className="text-green-400">● Nuevos: {contacts.filter((c) => c.status === "new").length}</span>
          <span className="text-yellow-400">● Revisados: {contacts.filter((c) => c.status === "reviewed").length}</span>
          <span className="text-gray-400">● Cerrados: {contacts.filter((c) => c.status === "closed").length}</span>
        </div>

        {/* Lista de contactos */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center text-muted-foreground">
                No hay contactos en esta categoría.
              </CardContent>
            </Card>
          )}

          {filtered.map((contact) => (
            <Card
              key={contact.id}
              className={`cursor-pointer transition hover:border-[#fca311] ${
                selected === contact.id ? "border-[#fca311]" : ""
              }`}
              onClick={() => {
                setSelected(selected === contact.id ? null : contact.id);
                setConfirmDelete(null);
              }}
            >
              <CardContent className="p-5">

                {/* Fila superior: nombre, status, fecha */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-base">{contact.name}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${
                        statusColor[contact.status] || statusColor["closed"]
                      }`}
                    >
                      {statusLabel[contact.status] || contact.status}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatDate(contact.created_at)}
                  </span>
                </div>

                {/* Grid de datos con etiquetas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                  {/* Email + botón copiar */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Correo</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#00BFFF]">{contact.email}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyEmail(contact.email, contact.id);
                        }}
                        className="text-muted-foreground hover:text-[#fca311] transition"
                        title="Copiar correo"
                      >
                        {copied === contact.id ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Institución */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Institución</span>
                    <span className="text-sm">
                      {contact.institution || <span className="text-muted-foreground italic">No indicada</span>}
                    </span>
                  </div>

                  {/* Asunto */}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Asunto</span>
                    <span className="text-sm text-[#fca311]">{contact.subject}</span>
                  </div>
                </div>

                {/* Detalle expandido: mensaje + acciones */}
                {selected === contact.id && (
                  <div className="mt-4 pt-4 border-t space-y-4">

                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Mensaje</span>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap mt-1 bg-muted/50 rounded-md p-3">
                        {contact.message}
                      </p>
                    </div>

                    {/* Botones de status + eliminar */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">

                      {/* Estados */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">Cambiar estado:</span>
                        <div className="flex gap-2">
                          {(["new", "reviewed", "closed"] as const).map((s) => (
                            <button
                              key={s}
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(contact.id, s);
                              }}
                              disabled={contact.status === s}
                              className={`px-3 py-1 rounded-md text-xs font-medium border transition disabled:opacity-40 disabled:cursor-not-allowed ${statusColor[s]}`}
                            >
                              {statusLabel[s]}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Eliminar */}
                      {confirmDelete !== contact.id ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setConfirmDelete(contact.id);
                          }}
                          className="text-xs text-red-400/60 hover:text-red-400 transition"
                        >
                          Eliminar
                        </button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-red-400">¿Seguro?</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteContact(contact.id);
                            }}
                            className="px-2 py-0.5 rounded text-xs bg-red-900/40 text-red-400 border border-red-600 hover:bg-red-900/70 transition"
                          >
                            Sí, borrar
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setConfirmDelete(null);
                            }}
                            className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground hover:text-white transition"
                          >
                            No
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
