$source = "MACandMOBILE"
$dest = "public/assets/employee-os"

$moves = @{
    "calender, mac.png" = "calendar-mac.png";
    "calender, mobile.png" = "calendar-mobile.png";
    "chat and collaboration, mac.png" = "chat-mac.png";
    "chat and collaboration,mobile.png" = "chat-mobile.png";
    "community,mac.png" = "community-mac.png";
    "community,mobile.png" = "community-mobile.png";
    "digital business card, mac.png" = "digital-card-mac.png";
    "digital business card, mobile.png" = "digital-card-mobile.png";
    "documents, mac.png" = "documents-mac.png";
    "documets, mobile.png" = "documents-mobile.png";
    "F & B, mac.png" = "fnb-mac.png";
    "F & B, mobile.png" = "fnb-mobile.png";
    "helpdesk, mac.png" = "helpdesk-mac.png";
    "helpdesk, mobile.png" = "helpdesk-mobile.png";
    "HRMS, mac.png" = "hrms-mac.png";
    "HRMS, mobile.png" = "hrms-mobile.png";
    "meeting room booking, mac.png" = "meeting-room-mac.png";
    "meeting room booking, mobile.png" = "meeting-room-mobile.png";
    "parking management, mac.png" = "parking-mac.png";
    "parking management, mobile.png" = "parking-mobile.png";
    "performace dashboard,mac.png" = "performance-mac.png";
    "performace dashboard, mobile.png" = "performance-mobile.png";
    "project and task management, mac.png" = "projects-mac.png";
    "project and task management, mobile.png" = "projects-mobile.png";
    "seat and space management, mac.png" = "seat-space-mac.png";
    "seat and space management, mobile.png" = "seat-space-mobile.png";
    "to do management, mac.png" = "todo-mac.png";
    "to do management, mobile.png" = "todo-mobile.png";
    "visitor management, mac.png" = "visitor-mac.png";
    "visitor management, mobile.png" = "visitor-mobile.png";
    "wallet, mac.png" = "wallet-mac.png";
    "wallet mobile.png" = "wallet-mobile.png";
}

foreach ($key in $moves.Keys) {
    if (Test-Path "$source\$key") {
        Move-Item "$source\$key" "$dest\$($moves[$key])" -Force
        Write-Host "Moved $key to $($moves[$key])"
    } else {
        Write-Host "WARNING: Could not find $source\$key"
    }
}
