# Image Files Mapping

## All Images in Public Folder

### Hero & Main Images
- `hero-background.png` - Main hero section background
- `main-training-area.png` - Main gym training area (Gallery & About page)
- `logo.png` - Fitgenix logo

### Services Images
- `crossfit-training.png` - CrossFit training service (Home page)
- `crossfit-equipment.png` - CrossFit equipment (Services page & Gallery)
- `zumba-class.png` - Zumba class service (Home page)
- `zumba-studio.png` - Zumba studio (Services page & Gallery)
- `yoga-class.png` - Yoga class service (Home page)
- `yoga-session.png` - Yoga session (Services page & Gallery)
- `steam-room.png` - Steam room service (Home page)
- `steam-session.png` - Steam session (Services page & Gallery)

### Training & Equipment Images
- `strength-training.png` - Strength training area (Gallery)
- `cardio-zone.png` - Cardio zone (Gallery)
- `training-equipment.png` - Training equipment (Gallery & About page)
- `additional-facility.png` - Additional facility (Gallery)

### Team Members
- `team-abhishek.png` - Abhishek Thakur (Co-Owner)
- `team-poonam.png` - Poonam Shukla (Owner)
- `team-rabiya.png` - Rabiya Khan (Fitness Coach)
- `team-ganesh.png` - Ganesh Jadhav (Fitness Coach)

## Usage in Code

All images are referenced using public URLs:
- Format: `/images/filename.png`
- Location: `client/public/images/`
- All paths are relative to public folder (React automatically serves from public folder)

## Image References by Component

### Hero.js
- `/images/hero-background.png` - Background image

### Home.js
- Services: `crossfit-training.png`, `zumba-class.png`, `yoga-class.png`, `steam-room.png`
- Gallery: `main-training-area.png`, `crossfit-equipment.png`, `zumba-studio.png`, `yoga-session.png`, `strength-training.png`, `cardio-zone.png`, `steam-session.png`, `training-equipment.png`, `additional-facility.png`

### Services.js
- `/images/crossfit-equipment.png` - Open-Air CrossFit
- `/images/zumba-studio.png` - Zumba Classes
- `/images/yoga-session.png` - Yoga Sessions
- `/images/strength-training.png` - Strength Training
- `/images/cardio-zone.png` - Cardio Training
- `/images/steam-session.png` - Steam Sessions

### About.js
- Team: `team-abhishek.png`, `team-poonam.png`, `team-rabiya.png`, `team-ganesh.png`
- Story: `main-training-area.png`, `steam-session.png`, `training-equipment.png`, `crossfit-equipment.png`

### ServiceCard.js
- Fallback: `/images/hero-background.png`

## Notes
- All images use proper public URL paths
- Error handling with fallback to `hero-background.png`
- Lazy loading enabled for gallery images
- All file names are descriptive and meaningful

