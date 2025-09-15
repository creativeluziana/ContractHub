import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  DocumentTextIcon as DocumentReportIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  PrinterIcon,
  ShareIcon,
  EyeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const ReportsPage: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState('executive');
  const [dateRange, setDateRange] = useState('30d');

  const reportTemplates = [
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'High-level overview of contract portfolio performance',
      icon: ChartBarIcon,
      lastGenerated: '2 hours ago',
      status: 'ready',
      metrics: ['Total Value', 'Risk Score', 'Renewal Rate', 'Compliance Status']
    },
    {
      id: 'portfolio',
      name: 'Portfolio Overview',
      description: 'Detailed analysis of all contracts and their status',
      icon: DocumentChartBarIcon,
      lastGenerated: '1 day ago',
      status: 'ready',
      metrics: ['Contract Types', 'Value Distribution', 'Status Breakdown', 'Timeline Analysis']
    },
    {
      id: 'risk',
      name: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation recommendations',
      icon: ExclamationTriangleIcon,
      lastGenerated: '3 hours ago',
      status: 'generating',
      metrics: ['Risk Trends', 'High-Risk Contracts', 'Mitigation Actions', 'Compliance Gaps']
    },
    {
      id: 'compliance',
      name: 'Compliance Report',
      description: 'Regulatory compliance status and audit trail',
      icon: CheckCircleIcon,
      lastGenerated: '1 week ago',
      status: 'ready',
      metrics: ['Compliance Score', 'Audit Trail', 'Policy Violations', 'Remediation Status']
    },
    {
      id: 'financial',
      name: 'Financial Analysis',
      description: 'Contract value analysis and cost optimization insights',
      icon: DocumentReportIcon,
      lastGenerated: '2 days ago',
      status: 'ready',
      metrics: ['Total Value', 'Cost Trends', 'ROI Analysis', 'Budget Impact']
    },
    {
      id: 'renewal',
      name: 'Renewal Forecast',
      description: 'Upcoming renewals and contract lifecycle management',
      icon: CalendarIcon,
      lastGenerated: '4 hours ago',
      status: 'ready',
      metrics: ['Renewal Timeline', 'Value at Risk', 'Negotiation Status', 'Auto-Renewals']
    }
  ];

  const recentReports = [
    {
      name: 'Q3 2024 Executive Summary',
      type: 'Executive Summary',
      generated: '2 hours ago',
      size: '2.4 MB',
      status: 'completed'
    },
    {
      name: 'Risk Assessment - September',
      type: 'Risk Assessment',
      generated: '1 day ago',
      size: '1.8 MB',
      status: 'completed'
    },
    {
      name: 'Compliance Audit Report',
      type: 'Compliance Report',
      generated: '3 days ago',
      size: '3.2 MB',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-success-100 text-success-800';
      case 'generating':
        return 'bg-warning-100 text-warning-800';
      case 'completed':
        return 'bg-success-100 text-success-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready':
      case 'completed':
        return <CheckCircleIcon className="h-4 w-4" />;
      case 'generating':
        return <ClockIcon className="h-4 w-4" />;
      default:
        return <ClockIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 xs:space-y-8">
      {/* Header */}
      <PageHeader
        title="Reports & Analytics"
        subtitle="Generate comprehensive reports and export data for analysis"
        showDateFilter={true}
        dateFilterValue={dateRange}
        onDateFilterChange={setDateRange}
        action={
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
            <DocumentReportIcon className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Generate Report
          </button>
        }
      />

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTemplates.map((template) => (
          <div
            key={template.id}
            className={`bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50 cursor-pointer transition-all duration-200 hover:shadow-medium ${
              selectedReport === template.id ? 'ring-2 ring-primary-500 border-primary-200' : ''
            }`}
            onClick={() => setSelectedReport(template.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <template.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
                {getStatusIcon(template.status)}
                <span className="ml-1 capitalize">{template.status}</span>
              </span>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Last generated: {template.lastGenerated}</p>
              <div className="flex flex-wrap gap-1">
                {template.metrics.map((metric, index) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <EyeIcon className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <ArrowDownTrayIcon className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <ShareIcon className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200">
                Generate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Reports</h3>
        <div className="space-y-4">
          {recentReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                  <DocumentReportIcon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{report.name}</h4>
                  <p className="text-xs text-gray-500">{report.type} • {report.size} • {report.generated}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                  {getStatusIcon(report.status)}
                  <span className="ml-1 capitalize">{report.status}</span>
                </span>
                <div className="flex items-center space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <EyeIcon className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <ArrowDownTrayIcon className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <PrinterIcon className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Export Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group">
            <DocumentReportIcon className="h-8 w-8 text-gray-400 group-hover:text-primary-600 mr-3" strokeWidth={1.5} />
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">PDF Export</div>
              <div className="text-xs text-gray-500">High-quality reports</div>
            </div>
          </button>
          
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group">
            <ChartBarIcon className="h-8 w-8 text-gray-400 group-hover:text-primary-600 mr-3" strokeWidth={1.5} />
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">Excel Export</div>
              <div className="text-xs text-gray-500">Data analysis ready</div>
            </div>
          </button>
          
          <button className="flex items-center justify-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group">
            <ShareIcon className="h-8 w-8 text-gray-400 group-hover:text-primary-600 mr-3" strokeWidth={1.5} />
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">Share Link</div>
              <div className="text-xs text-gray-500">Collaborative access</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
