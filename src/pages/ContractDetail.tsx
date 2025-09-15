import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Contract } from '../types';
import { 
  ArrowLeftIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ChartBarIcon,
  ArrowDownTrayIcon,
  PencilIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const ContractDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [contract, setContract] = useState<Contract | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEvidence, setShowEvidence] = useState(false);

  useEffect(() => {
    if (id) {
      fetchContract(id);
    }
  }, [id]);

  const fetchContract = async (contractId: string) => {
    try {
      setLoading(true);
      const response = await fetch('/contracts.json');
      if (!response.ok) {
        throw new Error('Failed to fetch contracts');
      }
      const contracts = await response.json();
      const foundContract = contracts.find((c: Contract) => c.id === contractId);
      
      if (foundContract) {
        setContract(foundContract);
      } else {
        setError('Contract not found');
      }
    } catch (err) {
      setError('Failed to load contract');
    } finally {
      setLoading(false);
    }
  };


  const getRiskBadge = (risk: string) => {
    const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
    switch (risk) {
      case 'Low':
        return `${baseClasses} bg-success-100 text-success-800`;
      case 'Medium':
        return `${baseClasses} bg-warning-100 text-warning-800`;
      case 'High':
        return `${baseClasses} bg-danger-100 text-danger-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
    switch (status) {
      case 'Active':
        return `${baseClasses} bg-success-100 text-success-800`;
      case 'Expired':
        return `${baseClasses} bg-danger-100 text-danger-800`;
      case 'Renewal Due':
        return `${baseClasses} bg-warning-100 text-warning-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !contract) {
    return (
      <div className="text-center py-12">
        <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-red-500" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">Error</h3>
        <p className="mt-1 text-sm text-gray-500">{error || 'Contract not found'}</p>
        <div className="mt-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700"
          >
            <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/dashboard"
            className="mr-6 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-6 w-6" strokeWidth={1.5} />
          </Link>
          <div>
            <h1 className="text-4xl font-light text-gray-900 tracking-tight">
              {contract.name}
            </h1>
            <p className="mt-2 text-lg text-gray-500 font-light">
              {contract.parties}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className={getRiskBadge(contract.risk)}>
            {contract.risk} Risk
          </span>
          <span className={getStatusBadge(contract.status)}>
            {contract.status}
          </span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <CurrencyDollarIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Contract Value</p>
              <p className="text-2xl font-light text-gray-900">{contract.value}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Start Date</p>
              <p className="text-2xl font-light text-gray-900">
                {new Date(contract.startDate).toLocaleDateString()}
              </p>
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
              <p className="text-sm font-medium text-gray-500">Expiry Date</p>
              <p className="text-2xl font-light text-gray-900">
                {new Date(contract.expiry).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                <ChartBarIcon className="h-6 w-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">AI Insights</p>
              <p className="text-2xl font-light text-gray-900">{contract.aiInsights.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Contract Information</h3>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Contract ID</dt>
              <dd className="mt-1 text-sm text-gray-900 font-mono">{contract.id}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Parties</dt>
              <dd className="mt-1 text-sm text-gray-900">{contract.parties}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Value</dt>
              <dd className="mt-1 text-sm text-gray-900">{contract.value}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Start Date</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(contract.startDate).toLocaleDateString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Expiry Date</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(contract.expiry).toLocaleDateString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1">
                <span className={getStatusBadge(contract.status)}>
                  {contract.status}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Risk Level</dt>
              <dd className="mt-1">
                <span className={getRiskBadge(contract.risk)}>
                  {contract.risk}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
          <h3 className="text-lg font-medium text-gray-900 mb-6">AI Insights</h3>
          <div className="space-y-4">
            {contract.aiInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <ChartBarIcon className="h-4 w-4 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{typeof insight === 'string' ? insight : insight.description || insight.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-soft border border-gray-200/50">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
            <DocumentTextIcon className="h-4 w-4 mr-2" strokeWidth={1.5} />
            View Document
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200">
            <ArrowDownTrayIcon className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Download
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-success-600 text-white text-sm font-medium rounded-lg hover:bg-success-700 transition-colors duration-200">
            <PencilIcon className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Edit Contract
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-warning-600 text-white text-sm font-medium rounded-lg hover:bg-warning-700 transition-colors duration-200">
            <ShareIcon className="h-4 w-4 mr-2" strokeWidth={1.5} />
            Share
          </button>
        </div>
      </div>

      {/* Evidence Drawer */}
      {showEvidence && contract.evidence.length > 0 && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75" onClick={() => setShowEvidence(false)} />
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
            <div className="h-full flex flex-col">
              <div className="px-4 py-5 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">Evidence</h3>
                  <button
                    onClick={() => setShowEvidence(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {contract.evidence.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm font-medium text-gray-900">
                          Page {item.page}, Section {item.section}
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {item.relevance}% relevant
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 bg-gray-50 rounded-md p-3">
                        "{item.snippet}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractDetail;
