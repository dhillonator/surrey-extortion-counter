# Surrey Extortion Awareness Website

A clean, simple website to track days since the last extortion shooting in Surrey, BC.

## Features

- **Automatic Daily Counter**: Counter increments by 1 each day at midnight PST
- **Clean Design**: Simple layout with rotated counter on the mayor's paper
- **Backend Admin Panel**: Separate admin page for resetting the counter
- **Persistent Storage**: Counter data saved in browser's localStorage
- **Responsive Design**: Works on all devices

## Files Included

- `index.html` - Public website
- `admin.html` - Admin panel for resetting counter
- `style.css` - Styling
- `script.js` - Counter logic
- `brendasticker.png` - Mayor image with blank paper

## How to Use

### Public Website
1. Open `index.html` in a browser
2. The counter shows days since last incident
3. Counter automatically increments daily at midnight PST

### Admin Panel
1. Open `admin.html` in a browser
2. View current counter value
3. Click "Reset to 0" button when new incident occurs
4. Confirm the reset

**Note**: Both pages must be opened from the same domain/location (same folder locally, or same website) to share the counter data.

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free & Easy)
1. Create a GitHub account at github.com
2. Create new repository: "surrey-extortion-awareness"
3. Upload all files:
   - index.html
   - admin.html
   - style.css
   - script.js
   - brendasticker.png
4. Go to Settings → Pages
5. Select "main" branch → Save
6. Your site will be live at: `yourusername.github.io/surrey-extortion-awareness`
7. Public site: `yourusername.github.io/surrey-extortion-awareness/index.html`
8. Admin panel: `yourusername.github.io/surrey-extortion-awareness/admin.html`

### Option 2: Netlify (Free & Easy)
1. Go to netlify.com
2. Drag and drop your folder
3. Site goes live instantly
4. Bookmark the admin URL

### Option 3: Any Web Host
Upload all files to your hosting provider via FTP/cPanel

### Option 4: Local Use
- Open `index.html` for public view
- Open `admin.html` in a separate tab/window to reset
- Both must be opened from same local folder

## Customization

### Adjust Counter Position
In `style.css`, find `.counter` and modify:
```css
transform: translate(-50%, -50%) translateX(12%) translateY(8%) rotate(-15deg);
```
- `translateX()`: Move left (-) or right (+)
- `translateY()`: Move up (-) or down (+)
- `rotate()`: Change angle

### Change Counter Size
In `style.css`:
```css
.counter {
    font-size: clamp(80px, 12vw, 180px);
}
```
Adjust the numbers: (minimum, responsive, maximum)

### Change Colors
- Counter: `.counter { color: #000; }`
- Header: `.header { color: #000; }`
- Background: `body { background-color: white; }`

## Security Considerations

**Important**: The admin panel is not password-protected. To secure it:

1. **Don't link to admin.html** from your public pages
2. **Keep the URL private** - only share with trusted people
3. **For better security**, consider:
   - Password protecting the admin.html file via your hosting provider
   - Using .htaccess for basic authentication
   - Implementing a proper backend with authentication

## Technical Details

- Uses `localStorage` to persist counter data
- Timezone: PST/PDT (America/Los_Angeles)
- Checks for new day every 60 seconds
- No server required - purely client-side
- Counter increments at midnight PST

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Troubleshooting

**Counter not updating?**
- Make sure you're accessing from the same domain/folder
- Check browser console for errors (F12)

**Admin reset not working?**
- Admin and public page must be from same origin
- Clear browser cache and try again

**Counter wrong timezone?**
- Counter uses PST automatically
- If issue persists, check system timezone settings

---

**Made to raise awareness about the extortion problem in Surrey, BC**
