import React from "react";
import dynamic from "next/dynamic";
import Accordion from "../../components/Accordion";
import { data } from "autoprefixer";

const Leetcode150 = () => {
  const dataArray = [
    {
      id: 1,
      topic: 'Arrays & Hashing',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' }
      ]
    },
    {
      id: 2,
      topic: 'Two Pointer',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Easy', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' }
      ]
    },
    {
      id: 3,
      topic: 'Sliding Window',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 3, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' }
      ]
    },
    {
      id: 4,
      topic: 'Stack',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 3, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 4, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' }
      ]
    },
    {
      id: 4,
      topic: 'Linked List',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 3, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 4, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 5, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
      ]
    },
    {
      id: 5,
      topic: 'Queue',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 3, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 4, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 5, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
      ]
    },
    {
      id: 5,
      topic: 'HashMap',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 3, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 4, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 5, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
      ]
    },
    {
      id: 6,
      topic: 'Trees',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 3, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 4, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 5, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
      ]
    },
    {
      id: 7,
      topic: 'Graphs',
      problems: [
        { id: 1, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 2, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 3, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 4, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
        { id: 5, problem: 'Contains Duplicates', difficulty: 'Medium', code: 'C++' },
      ]
    }
  ]


  return (
    <div className="">

      {dataArray.map((data) => {
       return  <Accordion data={data} key={data.id}/>
        
      })}
      
    </div>
  );
};

export default Leetcode150;
