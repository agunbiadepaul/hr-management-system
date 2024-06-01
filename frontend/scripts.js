document.addEventListener("DOMContentLoaded", function() {
  // Fetch data from the backend API and populate the dashboard

  // Example: Fetch total employees
  fetch('/api/employees/count')
      .then(response => response.json())
      .then(data => {
          document.getElementById('totalEmployees').textContent = data.count;
      })
      .catch(error => console.error('Error fetching total employees:', error));

  // Example: Fetch recent activities
  fetch('/api/activities/recent')
      .then(response => response.json())
      .then(data => {
          const recentActivitiesList = document.getElementById('recentActivities');
          data.activities.forEach(activity => {
              const listItem = document.createElement('li');
              listItem.textContent = activity.description;
              recentActivitiesList.appendChild(listItem);
          });
      })
      .catch(error => console.error('Error fetching recent activities:', error));
  
  // Add event listeners for quick action buttons
  document.getElementById('addEmployeeBtn').addEventListener('click', function() {
      // Open add employee form
  });

  document.getElementById('recordAttendanceBtn').addEventListener('click', function() {
      // Open record attendance form
  });

  // Initialize charts using a library like Chart.js
  const ctxAttendance = document.getElementById('attendanceChart').getContext('2d');
  const attendanceChart = new Chart(ctxAttendance, {
      type: 'line',
      data: {
          // Data for attendance chart
      },
      options: {
          // Options for attendance chart
      }
  });

  const ctxLeave = document.getElementById('leaveChart').getContext('2d');
  const leaveChart = new Chart(ctxLeave, {
      type: 'bar',
      data: {
          // Data for leave chart
      },
      options: {
          // Options for leave chart
      }
  });
});
