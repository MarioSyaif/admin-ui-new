import React, { useContext, useEffect, useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Card from '../components/elements/Card';
import CardBalance from '../components/fragments/CardBalance';
import CardGoal from '../components/fragments/CardGoal';
import CardUpcomingBill from '../components/fragments/CardUpcomingBill';
import CardRecentTransaction from '../components/fragments/CardRecentTransaction';
import CardStatistic from '../components/fragments/CardStatistic';
import CardExpenseBreakdown from '../components/fragments/CardExpenseBreakdown';
import { transactions, bills, expensesBreakdowns,  balances,goals,expensesStatistics } from '../data';
import { goalService } from '../services/dataService';
import { AuthContext } from '../context/AuthContext';


function Dashboard() {
  		const [goals, setGoals] = useState({});

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);
  
  console.log(goals);
  
  return (
    <>
    	<MainLayout>
        <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
          <div className="sm:col-span-4">
            <CardBalance data={balances}/>
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals}/>
          </div>
          <div className="sm:col-span-4">
           <CardUpcomingBill data={bills} />
          </div>
          	<div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics}/>
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns}/>
          </div>
        </div>
      </MainLayout>
       </>
  );
}

export default Dashboard;