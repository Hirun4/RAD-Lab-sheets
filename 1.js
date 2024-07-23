function getGreeting(time) {
    
    const [hours, minutes] = time.split(':').map(Number);
    
    if (hours < 10) {
        return "Good morning";
    } else if (hours < 20) {
        return "Good day";
    } else {
        return "Good evening";
    }
}


console.log(getGreeting("09:30")); 
console.log(getGreeting("14:45")); 
console.log(getGreeting("21:00")); 
