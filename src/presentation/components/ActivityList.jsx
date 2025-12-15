
import './ChatListItem.css';



const ActivityList = ({ activities }) => (
  <div className="bg-white rounded-lg p-4">
    <h3 className="font-semibold text-gray-900 mb-3">Notes</h3>
    <textarea
      placeholder="Write a note..."
      className="w-full p-2 border border-gray-300 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="2"
    />
    <div className="space-y-3">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
            JH
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900">{activity.user}</p>
            <p className="text-xs text-gray-600 mt-0.5">{activity.action}</p>
            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityList;