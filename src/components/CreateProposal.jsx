// src/components/CreateProposal.jsx
import React, { useState } from 'react';
import { useContractWrite } from 'wagmi';
import { daoVotingABI, CONTRACT_ADDRESSES } from '../contracts/abi';

const CreateProposal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [electionId, setElectionId] = useState('');

  const { write: openElection, isLoading } = useContractWrite({
    address: CONTRACT_ADDRESSES.daoVoting,
    abi: daoVotingABI,
    functionName: 'open_election',
    onSuccess: () => {
      alert('Proposal created successfully!');
      onClose();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would need to format the electionId properly
    openElection({
      args: [electionId],
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-2xl border border-cyan-500/20 p-8 shadow-2xl max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-white mb-6">Create New Proposal</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-32 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Election ID (unique identifier)</label>
            <input
              type="text"
              value={electionId}
              onChange={(e) => setElectionId(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Creating...' : 'Create Proposal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProposal;