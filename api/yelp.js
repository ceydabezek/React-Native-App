import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer q5eF3fraj085Ofu-aSn3645MnxSnYr0UCzYHhxs2zI7rxrrxQBnAQ93-3bQvsycueYPoILHN1IN2mjROcRDddHs6XiEGZS5Ab4eNi_XY9oul43bS3BirGebivvA_ZXYx'
    },

});