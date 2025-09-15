import React, { useState } from 'react';
import { 
  ExclamationTriangleIcon,
  ClockIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

const InsightsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('risk');

  // Mock data for charts and analytics
  const contractMetrics = {
    totalContracts: 24,
    activeContracts: 18,
    expiringSoon: 3,
    highRisk: 2,
    totalValue: 1250000,
    avgContractValue: 52083,
    renewalRate: 87.5,
    riskScore: 3.2
  };

  const riskTrends = [
    { month: 'Jan', low: 12, medium: 8, high: 2 },
    { month: 'Feb', low: 14, medium: 6, high: 3 },
    { month: 'Mar', low: 16, medium: 5, high: 1 },
    { month: 'Apr', low: 18, medium: 4, high: 2 },
    { month: 'May', low: 15, medium: 7, high: 1 },
    { month: 'Jun', low: 17, medium: 6, high: 2 }
  ];

  const contractTypes = [
    { name: 'Service Agreements', count: 8, value: 450000, color: 'bg-primary-500' },
    { name: 'NDAs', count: 6, value: 0, color: 'bg-success-500' },
    { name: 'MSAs', count: 4, value: 600000, color: 'bg-warning-500' },
    { name: 'SOWs', count: 3, value: 200000, color: 'bg-accent-500' },
    { name: 'Others', count: 3, value: 0, color: 'bg-gray-500' }
  ];

  const upcomingRenewals = [
    { name: 'Microsoft MSA', daysLeft: 15, value: 500000, risk: 'Medium' },
    { name: 'TelNet Services', daysLeft: 8, value: 250000, risk: 'High' },
    { name: 'ABC Corp NDA', daysLeft: 22, value: 0, risk: 'Low' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            Contract Analytics
          </h1>
          <p className="mt-2 text-lg text-gray-500 font-light">
            Advanced insights and performance metrics for your contract portfolio
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <DocumentTextIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Contracts</p>
              <p className="text-2xl font-light text-gray-900">{contractMetrics.totalContracts}</p>
              <div className="flex items-center mt-1">
                <ArrowUpIcon className="h-4 w-4 text-success-500 mr-1" />
                <span className="text-sm text-success-600">+12%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center">
                <CurrencyDollarIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Value</p>
              <p className="text-2xl font-light text-gray-900">${(contractMetrics.totalValue / 1000000).toFixed(1)}M</p>
              <div className="flex items-center mt-1">
                <ArrowUpIcon className="h-4 w-4 text-success-500 mr-1" />
                <span className="text-sm text-success-600">+8%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gradient-to-br from-warning-500 to-warning-600 rounded-xl flex items-center justify-center">
                <ClockIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Renewal Rate</p>
              <p className="text-2xl font-light text-gray-900">{contractMetrics.renewalRate}%</p>
              <div className="flex items-center mt-1">
                <ArrowUpIcon className="h-4 w-4 text-success-500 mr-1" />
                <span className="text-sm text-success-600">+5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gradient-to-br from-danger-500 to-danger-600 rounded-xl flex items-center justify-center">
                <ExclamationTriangleIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Risk Score</p>
              <p className="text-2xl font-light text-gray-900">{contractMetrics.riskScore}/10</p>
              <div className="flex items-center mt-1">
                <ArrowDownIcon className="h-4 w-4 text-success-500 mr-1" />
                <span className="text-sm text-success-600">-0.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Trends Chart */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Risk Trends</h3>
            <div className="flex space-x-2">
              <button className={`px-3 py-1 rounded-lg text-sm font-medium ${selectedMetric === 'risk' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setSelectedMetric('risk')}>
                Risk
              </button>
              <button className={`px-3 py-1 rounded-lg text-sm font-medium ${selectedMetric === 'value' ? 'bg-primary-100 text-primary-700' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setSelectedMetric('value')}>
                Value
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {riskTrends.map((trend, index) => (
              <div key={index} className="flex-1 flex flex-col items-center space-y-1">
                <div className="w-full flex flex-col space-y-1">
                  <div className="h-16 bg-success-200 rounded-t" style={{ height: `${(trend.low / 20) * 100}%` }}></div>
                  <div className="h-12 bg-warning-200" style={{ height: `${(trend.medium / 20) * 100}%` }}></div>
                  <div className="h-8 bg-danger-200 rounded-b" style={{ height: `${(trend.high / 20) * 100}%` }}></div>
                </div>
                <span className="text-xs text-gray-500">{trend.month}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-success-200 rounded mr-2"></div>
              <span className="text-sm text-gray-600">Low Risk</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-warning-200 rounded mr-2"></div>
              <span className="text-sm text-gray-600">Medium Risk</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-danger-200 rounded mr-2"></div>
              <span className="text-sm text-gray-600">High Risk</span>
            </div>
          </div>
        </div>

        {/* Contract Types Distribution */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Contract Types</h3>
          <div className="space-y-4">
            {contractTypes.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-4 w-4 ${type.color} rounded mr-3`}></div>
                  <span className="text-sm font-medium text-gray-900">{type.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{type.count}</div>
                  <div className="text-xs text-gray-500">${(type.value / 1000).toFixed(0)}K</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Renewals */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Upcoming Renewals</h3>
        <div className="space-y-4">
          {upcomingRenewals.map((renewal, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                  <CalendarIcon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{renewal.name}</h4>
                  <p className="text-xs text-gray-500">{renewal.daysLeft} days remaining</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">${(renewal.value / 1000).toFixed(0)}K</div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  renewal.risk === 'High' ? 'bg-danger-100 text-danger-800' :
                  renewal.risk === 'Medium' ? 'bg-warning-100 text-warning-800' :
                  'bg-success-100 text-success-800'
                }`}>
                  {renewal.risk} Risk
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
