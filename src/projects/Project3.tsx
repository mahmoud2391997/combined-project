import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/card';

const Project3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Project 3</CardTitle>
            <CardDescription>Another Box layout project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              This is Project 3 - another box layout project. Content will be added here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Project3;
