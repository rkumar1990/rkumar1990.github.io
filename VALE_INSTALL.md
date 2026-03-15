# Vale Installation for Windows

## Quick Install (recommended)

### Option 1: Using Chocolatey
```powershell
choco install vale
```

### Option 2: Using Scoop
```powershell
scoop install vale
```

### Option 3: Manual Download
1. Download from [Vale Releases](https://github.com/errata-ai/vale/releases/latest)
2. Download `vale_X.X.X_Windows_64-bit.zip`
3. Extract to a folder (e.g., `C:\Tools\vale`)
4. Add to PATH:
   ```powershell
   [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Tools\vale", "User")
   ```
5. Restart PowerShell

## Test Installation

After installation:
```powershell
vale --version
```

## Sync Vale Styles

Before first use, download Microsoft style package:
```powershell
vale sync
```

This downloads the official Microsoft Writing Style Guide rules.

## Quick Test

Test on one of your blog posts:
```powershell
vale docs/blog/posts/Complete-guide-to-cloud-hosting.md
```

You should see style suggestions and warnings based on Microsoft Writing Style Guide rules.
