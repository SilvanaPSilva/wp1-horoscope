# ASTRO 
ASTRO is a Full Stack Horoscope Web Application built with Angular, Express and MongoDB.

---


### Frontend
- Angular Standalone Components, Routing and HttpClient
- Signals
- FormsModule
- Bootstrap (https://getbootstrap.com/)

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB Atlas
- https://www.mongodb.com/

### External API
- Astrology API
- https://astrologyapi.com/
---

## Horoscope
- Daily horoscope
- Tomorrow horoscope
- Monthly horoscope
- Zodiac sign selection
- Loading state

## Favourites
- Add favourite members
- List members
- Delete members

---

# Architecture

Frontend (Angular)
↓
Services
↓
Express Backend
↓
MongoDB + Astrology API

---

# Pages

## Home
Displays horoscope predictions.

## Favourites
Contains:
- Add Member component
- List Members component

## About
Astropage information.

---

# API Routes

## Horoscope

GET `/horoscope/today/:sign`
GET `/horoscope/tomorrow/:sign`
GET `/horoscope/monthly/:sign`

---

## Members

GET `/members`
POST `/members`
DELETE `/members/:id`

---

# ▶️ Run Project

## Frontend

```bash
ng serve
```

Runs on:

```text
http://localhost:4200
```

---

## Backend

```bash
npm run dev
```

Runs on:

```text
http://localhost:3000
```

---

Silvana Silva - s00273672