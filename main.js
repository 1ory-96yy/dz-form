const bookingForm = document.getElementById('bookingForm');
        const viewBookingsBtn = document.getElementById('viewBookings');
        const bookingsTable = document.getElementById('bookingsTable');
        const seatsContainer = document.getElementById('seats');
        let bookings = [];
        let selectedSeats = [];
        function renderSeats() {
            seatsContainer.innerHTML = '';
            for (let i = 1; i <= 20; i++) {
                const seat = document.createElement('div');
                seat.className = 'seat';
                seat.textContent = i;
                seat.dataset.seatNumber = i;
                const isBooked = bookings.some(booking => 
                    booking.route === document.getElementById('routeSelect').value &&
                    booking.date === document.getElementById('travelDate').value &&
                    booking.seats.includes(i)
                );
                if (isBooked) {
                    seat.classList.add('booked');
                } else {
                    seat.addEventListener('click', function() {
                        this.classList.toggle('selected');
                        const seatNumber = parseInt(this.dataset.seatNumber);
                        if (this.classList.contains('selected')) {
                            selectedSeats.push(seatNumber);
                        } else {
                            selectedSeats = selectedSeats.filter(num => num !== seatNumber);
                        }
                    });
                }
                seatsContainer.appendChild(seat);
            }
        }
        document.getElementById('routeSelect').addEventListener('change', renderSeats);
        document.getElementById('travelDate').addEventListener('change', renderSeats);
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (selectedSeats.length === 0) {
                alert('Будь ласка, оберіть хоча б одне місце!');
                return;
            }
            const route = document.getElementById('routeSelect').value;
            const date = document.getElementById('travelDate').value;
            bookings.push({
                route,
                date,
                seats: [...selectedSeats],
                bookingDate: new Date().toLocaleString()
            });
            alert(`Місця ${selectedSeats.join(', ')} успішно заброньовані!`);
            bookingForm.reset();
            selectedSeats = [];
            renderSeats();
        });
        viewBookingsBtn.addEventListener('click', function() {
            if (bookings.length === 0) {
                bookingsTable.innerHTML = '<p>У вас немає активних бронювань.</p>';
                return;
            }
            let tableHTML = `
                <table>
                    <tr>
                        <th>Дата бронювання</th>
                        <th>Напрямок</th>
                        <th>Дата поїздки</th>
                        <th>Місця</th>
                    </tr>
            `;
            bookings.forEach(booking => {
                tableHTML += `
                    <tr>
                        <td>${booking.bookingDate}</td>
                        <td>${booking.route}</td>
                        <td>${booking.date}</td>
                        <td>${booking.seats.join(', ')}</td>
                    </tr>
                `;
            });
            tableHTML += '</table>';
            bookingsTable.innerHTML = tableHTML;
        });
        renderSeats();