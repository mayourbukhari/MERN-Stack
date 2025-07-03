# Weather App - OpenWeather API Integration

This is a full-stack weather application that uses the OpenWeather API to fetch weather data.

## Features

- Fetch weather data by city name
- Get weather data for current location using geolocation
- Display temperature, weather description, humidity, and wind speed
- Weather icons from OpenWeather
- Error handling for invalid cities and API issues

## Setup Instructions

### 1. Get OpenWeather API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to your API keys section
4. Copy your API key

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd FSD/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the `.env` file with your OpenWeather API key:
   ```
   OPENWEATHER_API_KEY=your_actual_api_key_here
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd FSD/frontend
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Backend Endpoints

- `GET /getMessage` - Returns a simple hello world message
- `GET /weather/:city` - Get weather data for a specific city
- `GET /weather/coordinates/:lat/:lon` - Get weather data for specific coordinates

### Usage Examples

#### Get weather by city:
```
GET http://localhost:3001/weather/Punjab
```

#### Get weather by coordinates:
```
GET http://localhost:3001/weather/coordinates/51.5074/-0.1278
```

## Frontend Features

- Input field to enter city name
- Button to fetch weather for entered city
- Button to get weather for current location (uses browser geolocation)
- Weather display with icon, temperature, description, humidity, and wind speed
- Error handling for invalid cities or API failures

## Technologies Used

- **Frontend**: React, Axios, HTML5 Geolocation API
- **Backend**: Node.js, Express, Axios, CORS, dotenv
- **API**: OpenWeather API
- **Styling**: Inline CSS (can be moved to CSS files)

## Environment Variables

Create a `.env` file in the backend directory with:

```
API_KEY=your_openweather_api_key
```

## Error Handling

The app handles various error scenarios:
- Invalid city names
- Network connectivity issues
- Invalid API keys
- Geolocation permission denied
- API rate limiting

## Next Steps

Potential enhancements:
- Add weather forecast (5-day forecast)
- Save favorite cities
- Add weather maps
- Implement weather alerts
- Add more detailed weather information
- Improve UI/UX with CSS frameworks
