import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Contract } from '../types';

interface ContractsContextType {
  contracts: Contract[];
  addContract: (contract: Omit<Contract, 'id'>) => void;
  updateContract: (id: string, contract: Partial<Contract>) => void;
  deleteContract: (id: string) => void;
  loading: boolean;
  error: string | null;
}

const ContractsContext = createContext<ContractsContextType | undefined>(undefined);

interface ContractsProviderProps {
  children: ReactNode;
}

export const ContractsProvider: React.FC<ContractsProviderProps> = ({ children }) => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load contracts from localStorage on mount
  useEffect(() => {
    loadContracts();
  }, []);

  // Save contracts to localStorage whenever contracts change
  useEffect(() => {
    if (contracts.length > 0) {
      localStorage.setItem('contracts', JSON.stringify(contracts));
    }
  }, [contracts]);

  const loadContracts = async () => {
    try {
      setLoading(true);
      
      // First try to load from localStorage
      const savedContracts = localStorage.getItem('contracts');
      if (savedContracts) {
        setContracts(JSON.parse(savedContracts));
        setLoading(false);
        return;
      }

      // If no saved contracts, load from the original JSON file
      const response = await fetch('/contracts.json');
      if (!response.ok) {
        throw new Error('Failed to fetch contracts');
      }
      const data = await response.json();
      setContracts(data);
    } catch (err) {
      setError('Failed to load contracts');
      console.error('Error loading contracts:', err);
    } finally {
      setLoading(false);
    }
  };

  const addContract = (contractData: Omit<Contract, 'id'>) => {
    const newContract: Contract = {
      ...contractData,
      id: `contract_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      aiInsights: [
        'Contract uploaded successfully',
        'AI analysis pending',
        'Review recommended within 30 days'
      ]
    };
    
    setContracts(prev => [newContract, ...prev]);
  };

  const updateContract = (id: string, contractData: Partial<Contract>) => {
    setContracts(prev => 
      prev.map(contract => 
        contract.id === id ? { ...contract, ...contractData } : contract
      )
    );
  };

  const deleteContract = (id: string) => {
    setContracts(prev => prev.filter(contract => contract.id !== id));
  };

  const value: ContractsContextType = {
    contracts,
    addContract,
    updateContract,
    deleteContract,
    loading,
    error
  };

  return (
    <ContractsContext.Provider value={value}>
      {children}
    </ContractsContext.Provider>
  );
};

export const useContracts = (): ContractsContextType => {
  const context = useContext(ContractsContext);
  if (context === undefined) {
    throw new Error('useContracts must be used within a ContractsProvider');
  }
  return context;
};
