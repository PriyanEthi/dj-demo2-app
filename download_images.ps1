$images = @{
    "hero-bg.jpg" = "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=1920&q=80"
    "profile.jpg" = "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=800&q=80"
    "concert-1.jpg" = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80"
    "concert-2.jpg" = "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80"
    "concert-3.jpg" = "https://images.unsplash.com/photo-1540039155733-5bb30b53aa87?auto=format&fit=crop&w=800&q=80"
    "concert-4.jpg" = "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80"
    "concert-5.jpg" = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    "concert-6.jpg" = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    "gallery-1.jpg" = "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&w=800&q=80"
    "gallery-2.jpg" = "https://images.unsplash.com/photo-1459749411177-0473ef7161cf?auto=format&fit=crop&w=800&q=80"
    "gallery-3.jpg" = "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80"
    "gallery-4.jpg" = "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800&q=80"
    "gallery-5.jpg" = "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80"
}

$destDir = "public\images"
if (!(Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }

foreach ($key in $images.Keys) {
    echo "Downloading $key..."
    try {
        Invoke-WebRequest -Uri $images[$key] -OutFile "$destDir\$key" -UserAgent "Mozilla/5.0"
    } catch {
        Write-Error "Failed to download $key : $_"
    }
}
