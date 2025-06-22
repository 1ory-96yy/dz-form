const attendanceForm = document.getElementById('attendanceForm');
        const viewAttendanceBtn = document.getElementById('viewAttendance');
        const attendanceTable = document.getElementById('attendanceTable');
        
        let attendanceRecords = [];
        
        attendanceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const group = document.getElementById('groupSelect').value;
            const lesson = document.getElementById('lessonSelect').value;
            const topic = document.getElementById('topic').value;
            
            const presentStudents = [];
            document.querySelectorAll('input[name="student"]:checked').forEach(checkbox => {
                presentStudents.push(checkbox.value);
            });
            
            attendanceRecords.push({
                group,
                lesson,
                topic,
                date: new Date().toLocaleDateString(),
                presentStudents
            });
            
            alert('Дані збережено!');
            attendanceForm.reset();
        });
        
        viewAttendanceBtn.addEventListener('click', function() {
            if (attendanceRecords.length === 0) {
                attendanceTable.innerHTML = '<p>Немає даних про відвідування.</p>';
                return;
            }
            
            let tableHTML = `
                <table>
                    <tr>
                        <th>Дата</th>
                        <th>Група</th>
                        <th>Пара</th>
                        <th>Тема</th>
                        <th>Присутні</th>
                    </tr>
            `;
            
            attendanceRecords.forEach(record => {
                tableHTML += `
                    <tr>
                        <td>${record.date}</td>
                        <td>${record.group}</td>
                        <td>${record.lesson}</td>
                        <td>${record.topic}</td>
                        <td>${record.presentStudents.join(', ')}</td>
                    </tr>
                `;
            });
            
            tableHTML += '</table>';
            attendanceTable.innerHTML = tableHTML;
        });