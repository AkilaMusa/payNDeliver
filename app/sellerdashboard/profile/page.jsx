
const AdminProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Profile</h1>
        
        {/* Profile Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center">
          <img
            src="https://via.placeholder.com/120"
            alt="Admin"
            className="w-20 h-20 rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Jane Smith</h2>
            <p className="text-gray-600">Senior Administrator</p>
            <p className="text-sm text-gray-500 mt-1">Last login: Today at 09:30 AM</p>
          </div>
          <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Edit Profile
          </button>
        </div>

        {/* Admin Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Details</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">jane.smith@admindashboard.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <p className="mt-1 text-gray-900">Super Admin</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <p className="mt-1 text-gray-900">IT Operations</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                <p className="mt-1 text-gray-900">ADM-2023-001</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                <div className="mt-1 flex items-center">
                  <span className="text-green-600 font-medium">Enabled</span>
                  <button className="ml-2 text-sm text-blue-500 hover:underline">Configure</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Password Change</label>
                <p className="mt-1 text-gray-900">30 days ago</p>
              </div>
              <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity Log</h3>
          <ul className="space-y-4">
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <p className="text-gray-700 flex-grow">Updated user permissions for Marketing team</p>
              <span className="text-gray-500">Today at 11:45 AM</span>
            </li>
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <p className="text-gray-700 flex-grow">Generated monthly sales report</p>
              <span className="text-gray-500">Yesterday at 3:30 PM</span>
            </li>
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <p className="text-gray-700 flex-grow">Approved new product listing: "Premium Widget"</p>
              <span className="text-gray-500">2 days ago</span>
            </li>
          </ul>
          <button className="mt-4 text-blue-500 hover:underline text-sm">View Full Activity Log</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;