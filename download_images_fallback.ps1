$images = @{
    "hero-bg.jpg" = "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=1920&q=80"
    "profile.jpg" = "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&w=800&q=80"
    "concert-1.jpg" = "https://placehold.co/800x600/1a1a1a/b026ff?text=Electric+Forest"
    "concert-2.jpg" = "https://placehold.co/800x600/1a1a1a/5eead4?text=Neon+Nights"
    "concert-3.jpg" = "https://placehold.co/800x600/1a1a1a/f472b6?text=Midnight+Sun"
    "concert-4.jpg" = "https://placehold.co/800x600/1a1a1a/b026ff?text=Cyber+Punk"
    "concert-5.jpg" = "https://placehold.co/800x600/1a1a1a/5eead4?text=Desert+Mirage"
    "concert-6.jpg" = "https://placehold.co/800x600/1a1a1a/f472b6?text=Underground"
    "gallery-1.jpg" = "https://placehold.co/800x600/1a1a1a/b026ff?text=Ultra+Miami"
    "gallery-2.jpg" = "https://placehold.co/800x600/1a1a1a/5eead4?text=Tomorrowland"
    "gallery-3.jpg" = "https://placehold.co/800x600/1a1a1a/f472b6?text=EDC+Vegas"
    "gallery-4.jpg" = "https://placehold.co/800x600/1a1a1a/b026ff?text=Creamfields"
    "gallery-5.jpg" = "https://placehold.co/800x600/1a1a1a/5eead4?text=Coachella"
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
