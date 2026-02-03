# Script de limpieza para XCAIL-NEXT
# Elimina componentes del template que ya no se usan

$projectPath = "F:\2026\XCAIL-NEXT"

Write-Host "🧹 Iniciando limpieza de componentes no usados..." -ForegroundColor Cyan

# Componentes a eliminar (del template original que ya no se usan)
$componentsToDelete = @(
    "src\components\Cta.tsx",
    "src\components\FAQ.tsx",
    "src\components\Features.tsx",
    "src\components\HeroCards.tsx",
    "src\components\HowItWorks.tsx",
    "src\components\Newsletter.tsx",
    "src\components\Pricing.tsx",
    "src\components\Services.tsx",
    "src\components\Sponsors.tsx",
    "src\components\Statistics.tsx",
    "src\components\Team.tsx",
    "src\components\Testimonials.tsx",
    "src\components\mode-toggle.tsx"
)

# UI components no usados
$uiComponentsToDelete = @(
    "src\components\ui\accordion.tsx",
    "src\components\ui\avatar.tsx",
    "src\components\ui\badge.tsx"
)

# Assets del template no usados
$assetsToDelete = @(
    "src\assets\cube-leg.png",
    "src\assets\growth.png",
    "src\assets\looking-ahead.png",
    "src\assets\pilot.png",
    "src\assets\react.svg",
    "src\assets\reflecting.png"
)

# Archivos raíz duplicados o no necesarios
$rootFilesToDelete = @(
    "App.tsx",
    "Navbar.tsx",
    "estructura.txt",
    "package-lock.json"
)

Write-Host "`n📦 Componentes a eliminar:" -ForegroundColor Yellow
$componentsToDelete | ForEach-Object { Write-Host "  - $_" }

Write-Host "`n📦 UI components a eliminar:" -ForegroundColor Yellow
$uiComponentsToDelete | ForEach-Object { Write-Host "  - $_" }

Write-Host "`n📦 Assets a eliminar:" -ForegroundColor Yellow
$assetsToDelete | ForEach-Object { Write-Host "  - $_" }

Write-Host "`n📦 Archivos raíz a eliminar:" -ForegroundColor Yellow
$rootFilesToDelete | ForEach-Object { Write-Host "  - $_" }

$confirm = Read-Host "`n¿Continuar con la eliminación? (s/n)"

if ($confirm -ne "s") {
    Write-Host "❌ Limpieza cancelada" -ForegroundColor Red
    exit
}

$deleted = 0
$notFound = 0

# Eliminar componentes
foreach ($component in $componentsToDelete) {
    $fullPath = Join-Path $projectPath $component
    if (Test-Path $fullPath) {
        Remove-Item $fullPath -Force
        Write-Host "✓ Eliminado: $component" -ForegroundColor Green
        $deleted++
    } else {
        Write-Host "⚠ No encontrado: $component" -ForegroundColor DarkGray
        $notFound++
    }
}

# Eliminar UI components
foreach ($component in $uiComponentsToDelete) {
    $fullPath = Join-Path $projectPath $component
    if (Test-Path $fullPath) {
        Remove-Item $fullPath -Force
        Write-Host "✓ Eliminado: $component" -ForegroundColor Green
        $deleted++
    } else {
        Write-Host "⚠ No encontrado: $component" -ForegroundColor DarkGray
        $notFound++
    }
}

# Eliminar assets
foreach ($asset in $assetsToDelete) {
    $fullPath = Join-Path $projectPath $asset
    if (Test-Path $fullPath) {
        Remove-Item $fullPath -Force
        Write-Host "✓ Eliminado: $asset" -ForegroundColor Green
        $deleted++
    } else {
        Write-Host "⚠ No encontrado: $asset" -ForegroundColor DarkGray
        $notFound++
    }
}

# Eliminar archivos raíz
foreach ($file in $rootFilesToDelete) {
    $fullPath = Join-Path $projectPath $file
    if (Test-Path $fullPath) {
        Remove-Item $fullPath -Force
        Write-Host "✓ Eliminado: $file" -ForegroundColor Green
        $deleted++
    } else {
        Write-Host "⚠ No encontrado: $file" -ForegroundColor DarkGray
        $notFound++
    }
}

Write-Host "`n✅ Limpieza completada" -ForegroundColor Cyan
Write-Host "   Archivos eliminados: $deleted" -ForegroundColor Green
Write-Host "   No encontrados: $notFound" -ForegroundColor DarkGray

Write-Host "`n🔧 Próximos pasos:" -ForegroundColor Yellow
Write-Host "   1. Verificá que el proyecto siga funcionando: pnpm dev"
Write-Host "   2. Si todo funciona bien, hacé commit de los cambios"
Write-Host ""
