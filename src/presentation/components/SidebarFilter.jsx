import "./SidebarFilter.css"

const SidebarFilter = ({ title, items, selected, onSelect }) => (
  <div className="mb-4">
    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">{title}</h3>
    <div className="space-y-1">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onSelect(item.value)}
          className={`w-full px-3 py-2 text-sm text-left rounded-lg flex items-center justify-between hover:bg-gray-100 transition ${
            selected === item.value ? 'bg-gray-100 font-medium' : ''
          }`}
        >
          <span>{item.label}</span>
          <span className="text-gray-400 text-xs">{item.count}</span>
        </button>
      ))}
    </div>
  </div>
);

export default SidebarFilter;