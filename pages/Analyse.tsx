"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Analysis() {
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [competitorLinks, setCompetitorLinks] = useState<string[]>([]);
  const [trafficData, setTrafficData] = useState<any>(null);
  const [additionalData, setAdditionalData] = useState<any>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem("productName") || "No Product Name";
    const storedDesc = localStorage.getItem("description") || "No Description";
    setProductName(storedProduct);
    setDescription(storedDesc);
  }, []);

  useEffect(() => {
    if (productName && description) {
      startAnalysis();
    }
  }, [productName, description]);

  const updateTerminal = (message: string) => {
    setTerminalLogs((prevLogs) => [...prevLogs, message]);
  };

  const fetchAdditionalData = async (data: any) => {
    updateTerminal("🔍 Fetching additional data...");
    try {
      console.log("trafffffix is " , trafficData)
      const response = await axios.post("http://127.0.0.1:5000/summarise", {data : data}, { headers: { "Content-Type": "application/json" } });
      setAdditionalData(response.data);
      console.log(response.data)
      updateTerminal("✅ Additional data retrieved successfully.");
    } catch (error) {
      updateTerminal("❌ Error fetching additional data.");
    }
  };

  const fetchCompetitorData = async (data: string[]) => {
    updateTerminal("🔍 Fetching competitor details...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const response = await axios.post("http://127.0.0.1:5000/traffic", { data }, { headers: { "Content-Type": "application/json" } });
      setTrafficData(response.data.data);
      updateTerminal("BounceRate " +response.data.data[0][0].BounceRate);
      updateTerminal("Month " +response.data.data[0][0].Month);
      updateTerminal("PagesPerVisit " +response.data.data[0][0].PagePerVisit);
      updateTerminal("TimeOnSite " +response.data.data[0][0].TimeOnSite);
      updateTerminal("Visits " +response.data.data[0][0].Visits);
      updateTerminal("Year " +response.data.data[0][0].Year);

      updateTerminal("2024-12-01 " +response.data.data[1][0]["2024-12-01"]);
      updateTerminal("2025-01-01 " +response.data.data[1][0]["2025-01-01"]);
      updateTerminal("PagesPerVisit " +response.data.data[1][0]["2025-02-01"]);

      updateTerminal("Direct " +response.data.data[2][0].Direct);
      updateTerminal("Mail " +response.data.data[2][0].Mail);
      updateTerminal("Search " +response.data.data[2][0].Search);

      updateTerminal("✅ Competitor analysis completed.");
      fetchAdditionalData(response.data.data);
      
    } catch (error) {
      updateTerminal("❌ Error fetching competitor details.");
    }
   
  };

  const startAnalysis = async () => {
    updateTerminal(`⚡ Analyzing ${productName}...`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateTerminal("📊 Checking market trends...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    updateTerminal("✅ Collecting data...");

    try {
      const response = await axios.post("http://127.0.0.1:5000/otherProducts", { product: productName }, { headers: { "Content-Type": "application/json" } });
      setCompetitorLinks(response.data.links);
      response.data.data.forEach((item: any) => {
        updateTerminal(`🔗 Title: ${item.position}`);
        updateTerminal(`📌 Source: ${item.title}`);
        updateTerminal(`🔗 Link: ${item.link}`);
        updateTerminal(`🔗 snippet: ${item.snippet}`);
        updateTerminal(`🔗 highghted_words: ${item.snippet_highlighted_words}`);
        updateTerminal(`🔗 Source: ${item.source}`);
        updateTerminal("\n");
        // updateTerminal(🔗 Link: ${item.link});
      });
      // updateTerminal(📌 Summary: ${response.data.data[0].position});

      if (response.data?.links) {
        fetchCompetitorData(response.data.links);
      }
    } catch (error) {
      updateTerminal("❌ Error during analysis.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="w-1/2 bg-gray-800 p-4 border-r border-gray-700">
        <h2 className="text-xl font-bold text-blue-400 mb-2">Terminal</h2>
        <div className="bg-black p-3 h-100% overflow-auto text-green-400 font-mono border border-gray-600 rounded-lg">
          {terminalLogs.map((log, index) => (
            <p key={index} className="text-green-400">{">_"} {log}</p>
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>
      <div className="w-1/2 p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-4">Analysis Output</h2>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg">
          <p><strong>Product Name:</strong> {productName}</p>
          <p><strong>Description:</strong> {description}</p>
        </div>
        {competitorLinks.length > 0 && (
          <div className="bg-gray-800 p-4 mt-4 rounded-lg border border-blue-500 shadow-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Competitors</h3>
            <ul className="list-disc pl-6">
              {competitorLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {trafficData && (
          <div className="bg-gray-800 p-4 mt-4 rounded-lg border border-green-500 shadow-lg">
            <h3 className="text-lg font-semibold text-green-400 mb-2">Traffic Analysis</h3>
            {/* <p><strong>Bounce Rate:</strong> {trafficData[0][0].BounceRate}</p> */}
            <p><strong>Month:</strong> {trafficData[0][0].Month}</p>
            <p><strong>Pages Per Visit:</strong> {trafficData[0][0].PagePerVisit}</p>
            <p><strong>Time On Site:</strong> {trafficData[0][0].TimeOnSite}</p>
            <p><strong>Visits:</strong> {trafficData[0][0].Visits}</p>
            <p><strong>Year:</strong> {trafficData[0][0].Year}</p>
            <br></br>

            <p><strong>2024-12-01:</strong> {trafficData[1][0]["2024-12-01"]}</p>
            <p><strong>2025-01-01:</strong> {trafficData[1][0]["2025-01-01"]}</p>
            <p><strong>2025-02-01:</strong> {trafficData[1][0]["2025-02-01"]}</p>

            <br></br>

            <p><strong>Direct:</strong> {trafficData[2][0].Direct}</p>
            <p><strong>Mail:</strong> {trafficData[2][0].Mail}</p>
            <p><strong>Search:</strong> {trafficData[2][0].Search}</p>
          </div>
        )}

        {additionalData && (
          <div className="bg-gray-800 p-4 mt-4 rounded-lg border border-yellow-500 shadow-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Final Verdict</h3>
            <p> {additionalData.data}</p>
            {/* <p><strong>Metric 2:</strong> {additionalData.metric2}</p> */}
          </div>
        )}
      </div>
    </div>
  );
}
