import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.session) {
        // Guardar sesión
        sessionStorage.setItem("xcail_admin", "true");
        navigate("/admin/contactos");
      }
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/media/logos/xcail-logo.png"
              alt="XCAIL Technologies"
              className="h-12 w-auto"
            />
          </div>
          <CardTitle className="text-2xl">Panel Administrativo</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Iniciá sesión con tu cuenta
          </p>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="mb-4 p-3 rounded-md bg-red-900/90 border border-red-600 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                placeholder="admin@xcail.com"
                className="w-full px-3 py-2 border rounded-md bg-background disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                placeholder="Ingresa tu contraseña"
                className="w-full px-3 py-2 border rounded-md bg-background disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-transparent border-2 border-[#fca311] text-[#fca311] hover:bg-[#fca311] hover:text-black font-semibold disabled:opacity-50"
            >
              {loading ? "Iniciando..." : "Iniciar sesión"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
