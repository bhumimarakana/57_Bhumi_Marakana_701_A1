function getResponse(message) {
    const userMsg = message.toLowerCase();

    if (userMsg.includes('hello') || userMsg.includes('hi')) {
        return "Hello! Welcome to Looks Beauty Parlour. How can I help you today?";
    } else if (userMsg.includes('service') || userMsg.includes('services')) {
        return "We offer facial, hair styling, bridal makeup, manicure, pedicure, waxing, and spa services.";
    } else if (userMsg.includes('bridal') || userMsg.includes('wedding')) {
        return "Our bridal packages include makeup, mehendi, hair styling, and saree draping. Book in advance for best results!";
    } else if (userMsg.includes('facial') || userMsg.includes('hair')) {
        return "We have multiple facial and hair treatments. You can choose from basic to premium packages.";
    } else if (userMsg.includes('price') || userMsg.includes('package')) {
        return "Our packages start from ₹499. Bridal packages start from ₹4999. Visit us for a custom consultation.";
    } else if (userMsg.includes('appointment') || userMsg.includes('book')) {
        return "You can book your appointment by calling 98765 43210 or visit the salon directly.";
    } else if (userMsg.includes('time') || userMsg.includes('open') || userMsg.includes('timing')) {
        return "We are open from 10 AM to 8 PM, all days of the week!";
    } else if (userMsg.includes('thank')) {
        return "You're most welcome! Stay beautiful!";
    } else if (userMsg.includes('help') || userMsg.includes('support')) {
        return "You can call our reception at 98765 43210 for more assistance.";
    } else {
        return "I'm your beauty assistant Ask me about services, bookings, or timings.";
    }
}

module.exports = { getResponse };
