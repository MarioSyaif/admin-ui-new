import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Card from '../components/elements/Card';
import CardBalance from '../components/fragments/CardBalance';
import CardGoal from '../components/fragments/CardGoal';
import CardUpcomingBill from '../components/fragments/CardUpcomingBill';
import CardRecentTransaction from '../components/fragments/CardRecentTransaction';
import CardStatistic from '../components/fragments/CardStatistic';
import CardExpenseBreakdown from '../components/fragments/CardExpenseBreakdown';
import { transactions, bills, expensesBreakdowns } from '../data';


function Dashboard() {
  console.log(transactions);
  return (
    <>
    	<MainLayout>
        <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
          <div className="sm:col-span-4">
            <CardBalance />
          </div>
          <div className="sm:col-span-4">
            <CardGoal />
          </div>
          <div className="sm:col-span-4">
           <CardUpcomingBill data={bills} />
          </div>
          	<div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic />
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