# Airtel App Clone

A clone of the Airtel mobile application built with modern web technologies.

## Features

- Account Management
- Mobile Recharge
- Data Plans
- Bill Payments
- Balance Check
- Transaction History

## Tech Stack

- Frontend: React.js
- UI Framework: Material-UI
- State Management: Redux
- Backend: Node.js with Express
- Database: MongoDB

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/maximusdecimusmeridiu/airtel-app.git
cd airtel-app
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Start both servers:
```bash
# In one terminal (backend)
npm run server

# In another terminal (frontend)
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3005

## Environment Variables

Create a .env file in the root directory with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/airtel-app
JWT_SECRET=your_jwt_secret_key
PORT=3005
```

## Project Structure

```
airtel-app/
├── client/                 # Frontend React application
├── server/                 # Backend Node.js/Express server
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── middleware/        # Custom middleware
└── package.json          # Root package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.