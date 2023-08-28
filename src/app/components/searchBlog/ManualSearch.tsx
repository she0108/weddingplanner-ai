"use client";

import { useEffect, useState } from "react";

export default function MyComponent() {
  const [searchData, setSearchData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/naverSearch/조선호텔 예식장`);
        if (response.ok) {
          const data = await response.json();
          setSearchData(data);
        } else {
          console.error("API call failed.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>네이버 블로그 검색 결과</h2>
      {searchData && (
        <ul>
          {searchData.data.items.map((item: any, index: any) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
