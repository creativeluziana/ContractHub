import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useContracts } from '../context/ContractsContext';
import { 
  CloudArrowUpIcon,
  DocumentTextIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface ContractFormData {
  name: string;
  parties: string;
  value: string;
  expiry: string;
  type: string;
  description: string;
  risk: string;
  file: File | null;
}

const UploadContractPage: React.FC = () => {
  const navigate = useNavigate();
  const { addContract } = useContracts();
  const [formData, setFormData] = useState<ContractFormData>({
    name: '',
    parties: '',
    value: '',
    expiry: '',
    type: '',
    description: '',
    risk: 'Low',
    file: null
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        setFormData(prev => ({
          ...prev,
          file
        }));
      } else {
        alert('Please upload only PDF files.');
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      file: null
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      clearInterval(progressInterval);
      setUploadProgress(100);

      // Add contract to the list
      const contractData = {
        name: formData.name,
        parties: formData.parties,
        value: formData.value || '$0',
        expiry: formData.expiry,
        status: 'Active' as const,
        risk: formData.risk as 'Low' | 'Medium' | 'High',
        startDate: new Date().toISOString().split('T')[0], // today's date
        clauses: [],
        evidence: [],
        aiInsights: [
          'Contract uploaded successfully',
          'AI analysis completed',
          'Review recommended within 30 days'
        ] as any
      };

      addContract(contractData);
      
      // Simulate success
      setTimeout(() => {
        setIsUploading(false);
        navigate('/dashboard');
      }, 500);

    } catch (error) {
      console.error('Upload failed:', error);
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const contractTypes = [
    'Service Agreement',
    'Master Service Agreement (MSA)',
    'Statement of Work (SOW)',
    'Non-Disclosure Agreement (NDA)',
    'Purchase Agreement',
    'License Agreement',
    'Employment Contract',
    'Other'
  ];

  return (
    <div className="space-y-6 xs:space-y-8">
      {/* Header */}
      <PageHeader
        title="Upload Contract"
        subtitle="Add new contracts to your portfolio with AI-powered analysis"
      />

      <div className="max-w-4xl mx-auto">
        <form id="upload-form" onSubmit={handleSubmit} className="space-y-8">
          {/* Contract Details */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-soft border border-gray-200/50 p-6 xs:p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Contract Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Contract Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                  placeholder="e.g., Microsoft Service Agreement"
                />
              </div>

              <div>
                <label htmlFor="parties" className="block text-sm font-medium text-gray-700 mb-2">
                  Parties Involved *
                </label>
                <input
                  type="text"
                  id="parties"
                  name="parties"
                  required
                  value={formData.parties}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                  placeholder="e.g., Your Company & Microsoft"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Contract Type *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                >
                  <option value="">Select contract type</option>
                  {contractTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-2">
                  Contract Value
                </label>
                <input
                  type="text"
                  id="value"
                  name="value"
                  value={formData.value}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                  placeholder="e.g., $50,000"
                />
              </div>

              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date *
                </label>
                <input
                  type="date"
                  id="expiry"
                  name="expiry"
                  required
                  value={formData.expiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                />
              </div>

              <div>
                <label htmlFor="risk" className="block text-sm font-medium text-gray-700 mb-2">
                  Risk Level
                </label>
                <select
                  id="risk"
                  name="risk"
                  value={formData.risk}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft"
                >
                  <option value="Low">Low Risk</option>
                  <option value="Medium">Medium Risk</option>
                  <option value="High">High Risk</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white shadow-soft resize-none"
                  placeholder="Brief description of the contract..."
                />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-soft border border-gray-200/50 p-6 xs:p-8">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Contract Document</h3>
            
            {!formData.file ? (
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 ${
                  dragActive
                    ? 'border-primary-400 bg-primary-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" strokeWidth={1.5} />
                <div className="text-lg font-medium text-gray-900 mb-2">
                  Upload your contract document
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  Drag and drop your PDF file here, or click to browse
                </div>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <CloudArrowUpIcon className="mr-2 h-5 w-5" strokeWidth={1.5} />
                  Choose File
                </label>
                <p className="text-xs text-gray-400 mt-2">PDF files only, max 10MB</p>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DocumentTextIcon className="h-8 w-8 text-red-500 mr-3" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{formData.file.name}</div>
                      <div className="text-xs text-gray-500">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    <XMarkIcon className="h-5 w-5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-soft border border-gray-200/50 p-6 xs:p-8">
              <div className="flex items-center mb-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mr-3"></div>
                <h3 className="text-lg font-medium text-gray-900">Uploading Contract...</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Processing contract and generating AI insights...
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="px-8 py-3 bg-black text-white font-medium rounded-xl shadow-soft hover:bg-gray-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isUploading ? 'Uploading...' : 'Upload Contract'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadContractPage;
