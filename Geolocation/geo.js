const allowLocation = document.querySelector('button');

        allowLocation.addEventListener('click', () => {
            navigator.geolocation.getCurrentPosition((position) => {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let url = `https://www.google.com/maps?q=${latitude},${longitude}`;

                let googleMapLink = document.querySelector('a').href = url;


            }, (error) => {
                alert('Please Allow Location')
            })
        })
