'use client';

interface MetricsChartProps {
  data: Array<{
    date: string;
    revenue: number;
    users: number;
    orders: number;
  }>;
}

const MetricsChart = ({ data }: MetricsChartProps) => {
  // Calculate max values for scaling
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const maxUsers = Math.max(...data.map(d => d.users));
  const maxOrders = Math.max(...data.map(d => d.orders));

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-[#0066FF] rounded-full mr-2" />
            <span className="text-sm text-[#677788]">Revenue</span>
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-[#00CC88] rounded-full mr-2" />
            <span className="text-sm text-[#677788]">Users</span>
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-[#FFB100] rounded-full mr-2" />
            <span className="text-sm text-[#677788]">Orders</span>
          </span>
        </div>
      </div>

      <div className="relative h-[300px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-[#677788]">
          <span>$5,000</span>
          <span>$4,000</span>
          <span>$3,000</span>
          <span>$2,000</span>
          <span>$1,000</span>
          <span>$0</span>
        </div>

        {/* Chart area */}
        <div className="absolute left-16 right-0 top-0 bottom-0">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-rows-5 gap-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="border-t border-gray-100 first:border-t-0"
              />
            ))}
          </div>

          {/* Data lines */}
          <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Revenue line */}
            <polyline
              points={data
                .map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d.revenue / maxRevenue) * 100}`)
                .join(' ')}
              fill="none"
              stroke="#0066FF"
              strokeWidth="2"
              className="drop-shadow-sm"
            />
            {/* Users line */}
            <polyline
              points={data
                .map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d.users / maxUsers) * 100}`)
                .join(' ')}
              fill="none"
              stroke="#00CC88"
              strokeWidth="2"
              className="drop-shadow-sm"
            />
            {/* Orders line */}
            <polyline
              points={data
                .map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d.orders / maxOrders) * 100}`)
                .join(' ')}
              fill="none"
              stroke="#FFB100"
              strokeWidth="2"
              className="drop-shadow-sm"
            />
          </svg>

          {/* Data points */}
          <div className="absolute inset-0 flex justify-between items-end">
            {data.map((d, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center"
                style={{ height: `${(d.revenue / maxRevenue) * 100}%` }}
              >
                <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="absolute top-full mt-2 text-xs text-[#677788] transform -rotate-45">
                  {formatDate(d.date)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsChart; 