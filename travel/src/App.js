import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Car Booking App</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {/* Add your Material-UI components and routes here */}
            </Container>
        </div>
    );
}

export default App;
