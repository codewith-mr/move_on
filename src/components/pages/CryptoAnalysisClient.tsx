'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart2, 
  ShieldAlert, 
  Zap, 
  Brain, 
  DollarSign, 
  LineChart, 
  Search, 
  ArrowRight, 
  AlertTriangle,
  Layers,
  Layout,
  MessageSquare,
  Target,
  Terminal,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Gauge,
  Clock,
  ExternalLink,
  Info
} from 'lucide-react';
import Link from 'next/link';

// ========================
// TRADINGVIEW WIDGETS
// ========================

const TickerTapeWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "BINANCE:BTCUSDT", "title": "BTC/USDT" },
        { "proName": "BINANCE:ETHUSDT", "title": "ETH/USDT" },
        { "proName": "BINANCE:SOLUSDT", "title": "SOL/USDT" },
        { "proName": "BINANCE:BNBUSDT", "title": "BNB/USDT" },
        { "proName": "BINANCE:XRPUSDT", "title": "XRP/USDT" },
        { "proName": "BINANCE:ADAUSDT", "title": "ADA/USDT" }
      ],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": true,
      "displayMode": "adaptive",
      "locale": "en"
    });
    container.current.appendChild(script);
  }, []);
  return <div ref={container} className="tradingview-widget-container"></div>;
});

const DexScreenerWidget = memo(() => {
  return (
    <div className="w-full h-full min-h-[600px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white relative">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-200 shadow-lg">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Live DexScreener Feed</span>
      </div>
      <iframe 
        src="https://dexscreener.com/solana?embed=1&theme=light&trades=0&info=0" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="DexScreener"
      />
    </div>
  );
});

const AdvancedChartWidget = memo(({ symbol = "BINANCE:BTCUSDT", interval = "240" }: { symbol?: string, interval?: string }) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": symbol,
      "interval": interval,
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });
    container.current.appendChild(script);
  }, [symbol, interval]);
  return <div ref={container} className="h-full w-full"></div>;
});

const ForexHeatMapWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "currencies": ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
      "isTransparent": true,
      "colorTheme": "light",
      "locale": "en"
    });
    container.current.appendChild(script);
  }, []);
  return <div ref={container} className="h-full w-full"></div>;
});

const EconomicCalendarWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "light",
      "isTransparent": true,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "importanceFilter": "-1,0,1",
      "countryFilter": "us,eu,gb,jp"
    });
    container.current.appendChild(script);
  }, []);
  return <div ref={container} className="h-full w-full"></div>;
});

const TimelineNewsWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "market",
      "market": "crypto",
      "colorTheme": "light",
      "isTransparent": true,
      "displayMode": "regular",
      "width": "100%",
      "height": "100%",
      "locale": "en"
    });
    container.current.appendChild(script);
  }, []);
  return <div ref={container} className="h-full w-full"></div>;
});

const CryptoHeatMapWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "dataSource": "Crypto",
      "blockSize": "market_cap_calc",
      "blockColor": "change",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "light",
      "hasTopBar": false,
      "isTransparent": true,
      "hasSymbolTooltip": true,
      "width": "100%",
      "height": "100%"
    });
    container.current.appendChild(script);
  }, []);
  return <div ref={container} className="h-full w-full"></div>;
});

// ========================
// COMPONENTS
// ========================

const GlassCard = ({ children, title, icon, className = "", role }: { children: React.ReactNode, title?: string, icon?: React.ReactNode, className?: string, role?: string }) => (
  <div className={`bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 relative overflow-hidden group ${className}`}>
    {title && (
      <div className="mb-6">
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
          {icon}
          {title}
        </h4>
        {role && (
          <p className="text-[9px] font-bold text-slate-400 uppercase mt-1 tracking-wider leading-relaxed">
            {role}
          </p>
        )}
      </div>
    )}
    {children}
  </div>
);

// ========================
// PAGE CLIENT
// ========================

export default function CryptoAnalysisClient() {
  const [analysisMode, setAnalysisMode] = useState<'spot' | 'meme' | 'futures' | 'forex' | 'stock' | 'shares'>('spot');
  
  const [marketData, setMarketData] = useState<Record<string, any>>({
    BTC: { price: '0.00', pc: '0.00%', status: 'up' },
    ETH: { price: '0.00', pc: '0.00%', status: 'up' },
    SOL: { price: '0.00', pc: '0.00%', status: 'up' },
    BNB: { price: '0.00', pc: '0.00%', status: 'up' },
    XRP: { price: '0.00', pc: '0.00%', status: 'up' },
  });

  const [sentiment, setSentiment] = useState({ value: 72, label: "Greed" });

  // LIVE WHALE TRACKING STATE
  const [whaleAlerts, setWhaleAlerts] = useState<any[]>([]);
  const [wsStatus, setWsStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');

  // WHALE TRACKING ENGINE (REAL BINANCE DATA)
  useEffect(() => {
    let ws: WebSocket;
    let reconnectTimeout: NodeJS.Timeout;

    const connect = () => {
      setWsStatus('connecting');
      const symbols = ['btcusdt', 'ethusdt', 'solusdt', 'bnbusdt'];
      const streams = symbols.map(s => `${s}@aggTrade`).join('/');
      ws = new WebSocket(`wss://stream.binance.com:9443/ws/${streams}`);

      ws.onopen = () => {
        setWsStatus('connected');
        console.log("Whale Tracking Connected");
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const price = parseFloat(data.p);
        const quantity = parseFloat(data.q);
        const value = price * quantity;
        const symbol = data.s.replace('USDT', '');

        // Threshold: $100,000 for more frequent updates
        if (value > 100000) {
          const isSell = data.m;
          const newAlert = {
            id: data.a + Date.now(), // Ensure unique ID
            l: `${symbol} Whale ${isSell ? 'Sell' : 'Buy'}`,
            v: `${quantity.toFixed(2)} ${symbol} ($${(value/1000000).toFixed(2)}M)`,
            t: "Just now",
            s: isSell ? 'bearish' : 'bullish'
          };

          setWhaleAlerts(prev => [newAlert, ...prev.slice(0, 5)]);
        }
      };

      ws.onerror = () => setWsStatus('error');
      ws.onclose = () => {
        setWsStatus('connecting');
        reconnectTimeout = setTimeout(connect, 5000); // Reconnect after 5s
      };
    };

    connect();

    const tInterval = setInterval(() => {
      setWhaleAlerts(prev => prev.map(a => {
        if (a.t === "Just now") return { ...a, t: "1m ago" };
        if (a.t === "1m ago") return { ...a, t: "2m ago" };
        return a;
      }));
    }, 60000);

    return () => {
      if (ws) ws.close();
      clearTimeout(reconnectTimeout);
      clearInterval(tInterval);
    };
  }, []);

  useEffect(() => {
    const symbols = ['btcusdt@ticker', 'ethusdt@ticker', 'solusdt@ticker', 'bnbusdt@ticker', 'xrpusdt@ticker'];
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbols.join('/')}`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      let symbol = data.s.replace('USDT', '');
      const price = parseFloat(data.c).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const pc = parseFloat(data.P).toFixed(2) + '%';
      const status = parseFloat(data.P) >= 0 ? 'up' : 'down';
      setMarketData(prev => ({ ...prev, [symbol]: { price, pc, status } }));
    };
    return () => ws.close();
  }, []);

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const res = await fetch('https://api.alternative.me/fng/');
        const data = await res.json();
        if (data.data && data.data[0]) {
          setSentiment({ value: parseInt(data.data[0].value), label: data.data[0].value_classification });
        }
      } catch (e) { console.error("Failed to fetch sentiment", e); }
    };
    fetchSentiment();
    const interval = setInterval(fetchSentiment, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-emerald-500/20 pb-20">
      
      {/* 0. LIVE TICKER TAPE */}
      <div className="fixed top-[73px] left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 h-10 overflow-hidden flex items-center">
        <div className="bg-emerald-500 text-white text-[8px] font-black px-3 h-full flex items-center gap-2 relative z-50">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
          LIVE
        </div>
        <div className="flex-1">
          <TickerTapeWidget />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 pt-32">
        
        {/* 1. HEADING / TITLE */}
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Institutional Grade Hub</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900 mb-6">
            Global Market <span className="text-emerald-500 italic">Terminal</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Analyze, learn, and execute with precision. Access real-time data streams, whale tracking, and professional technical analysis nodes.
          </p>
        </header>

        {/* 2. MODE SWITCHER (TABS) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-50 p-2 rounded-[2.5rem] border border-slate-100 max-w-fit mx-auto">
          {[
            { id: 'spot', label: 'Spot', icon: <Target size={14} /> },
            { id: 'meme', label: 'Meme/New Coins', icon: <Brain size={14} /> },
            { id: 'futures', label: 'Futures', icon: <Zap size={14} /> },
            { id: 'forex', label: 'Forex', icon: <DollarSign size={14} /> },
            { id: 'stock', label: 'Stocks', icon: <TrendingUp size={14} /> },
            { id: 'shares', label: 'Company Shares', icon: <Layers size={14} /> },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setAnalysisMode(mode.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all text-[11px] font-black uppercase tracking-widest ${
                analysisMode === mode.id 
                  ? 'bg-slate-900 text-white shadow-xl' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {mode.icon}
              {mode.label}
            </button>
          ))}
        </div>

        {/* 3. MAIN CHART */}
        <div className="mb-12">
          <GlassCard className="h-[700px] p-0 overflow-hidden border-slate-200 shadow-2xl relative">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-200 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                  {analysisMode.toUpperCase()} LIVE
                </span>
              </div>
            </div>
            {analysisMode === 'meme' ? (
              <DexScreenerWidget />
            ) : (
              <AdvancedChartWidget 
                symbol={
                  analysisMode === 'spot' ? 'BINANCE:BTCUSDT' : 
                  analysisMode === 'futures' ? 'BINANCE:BTCUSDT.P' : 
                  analysisMode === 'forex' ? 'FX:EURUSD' : 
                  analysisMode === 'stock' ? 'NASDAQ:AAPL' : 'NYSE:BRK.A'
                }
                interval={analysisMode === 'futures' ? '1' : '60'}
              />
            )}
          </GlassCard>
        </div>

        {/* 4. HEATMAP | WHALE TRACKING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 h-[500px]">
            <GlassCard title="Market Heatmap" icon={<Layout className="w-4 h-4 text-emerald-500" />} className="h-full p-0 overflow-hidden shadow-lg">
              <div className="h-full">
                {analysisMode === 'forex' ? <ForexHeatMapWidget /> : <CryptoHeatMapWidget />}
              </div>
            </GlassCard>
          </div>
          <div className="lg:col-span-5 h-[500px]">
            <GlassCard title="Real-Time Whale Tracking" icon={<Activity className="w-4 h-4 text-emerald-500" />} className="h-full flex flex-col shadow-lg relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-[scan_3s_linear_infinite] pointer-events-none"></div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${wsStatus === 'connected' ? 'bg-emerald-500 animate-pulse' : wsStatus === 'connecting' ? 'bg-amber-500 animate-bounce' : 'bg-rose-500'}`}></div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  {wsStatus === 'connected' ? 'Protocol Live' : wsStatus === 'connecting' ? 'Connecting Node...' : 'Node Error'}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <AnimatePresence initial={false}>
                  {whaleAlerts.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50">
                      <Search className="w-8 h-8 text-slate-300 mb-2 animate-bounce" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Scanning for Whale Activity...</p>
                    </div>
                  ) : (
                    whaleAlerts.map((item) => (
                      <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, x: 20, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: "auto" }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:border-emerald-200 transition-colors overflow-hidden"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.s === 'bullish' ? 'bg-emerald-500' : item.s === 'bearish' ? 'bg-rose-500' : 'bg-slate-400'}`}></span>
                            <span className="text-[10px] font-black uppercase text-slate-400">{item.l}</span>
                          </div>
                          <span className="text-sm font-black text-slate-900">{item.v}</span>
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase italic">{item.t}</span>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400">Net Whale Bias</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase">Institutional Flow</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* 5. NEWS / IMPACT / BUBBLES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2">
            <GlassCard title="Live Macro & Fed Updates" icon={<MessageSquare className="w-4 h-4 text-emerald-500" />} className="h-[500px] shadow-lg overflow-hidden p-0">
              <div className="h-full">
                <TimelineNewsWidget />
              </div>
            </GlassCard>
          </div>
          <div>
            <GlassCard title="Upcoming Macro Events" icon={<Clock className="w-4 h-4 text-emerald-500" />} className="h-[500px] shadow-lg p-0 overflow-hidden">
              <div className="h-full pt-4">
                <EconomicCalendarWidget />
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="mb-24">
          <GlassCard title="Market Bubbles" icon={<Activity className="w-4 h-4 text-emerald-500" />} className="h-[400px] shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="text-sm font-black text-slate-900 mb-2 uppercase">Interactive Bubbles</h4>
                <a href="https://cryptobubbles.net/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-black transition-all">
                  Open Bubbles View
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 6. GLOBAL MACRO INTELLIGENCE HUB */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 mb-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">Macro Intelligence Node</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                Global Economic <span className="text-amber-500 italic">Clock</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium mt-4">
                Track inflation, interest rates, and the exact countdown to high-impact macro-economic releases.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next FOMC Meeting</div>
                <div className="text-xl font-black text-slate-900 italic">May 01, 2024</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-200">
                <Clock size={20} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { l: "US Inflation (CPI)", v: "3.2%", c: "+0.1%", s: "neutral", desc: "Annual consumer price index change." },
              { l: "Fed Funds Rate", v: "5.50%", c: "PAUSE", s: "bullish", desc: "Current benchmark interest rate range." },
              { l: "Unemployment", v: "3.9%", c: "+0.2%", s: "bearish", desc: "US non-farm unemployment rate." },
              { l: "Next Rate Move", v: "CUT?", c: "JUN 2024", s: "bullish", desc: "Market expectation for first rate cut." },
            ].map((stat, i) => (
              <GlassCard key={i} className="hover:border-amber-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.l}</span>
                  <div className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase ${stat.s === 'bullish' ? 'bg-emerald-100 text-emerald-600' : stat.s === 'bearish' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-500'}`}>
                    {stat.c}
                  </div>
                </div>
                <div className="text-3xl font-black text-slate-900 mb-2 italic tracking-tighter">{stat.v}</div>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">{stat.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <GlassCard title="Impact Calendar: Inflation & Rates" icon={<Clock className="w-4 h-4 text-amber-500" />} className="h-[600px] shadow-lg p-0 overflow-hidden">
                <div className="h-full pt-4">
                  <EconomicCalendarWidget />
                </div>
              </GlassCard>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <GlassCard title="Rate Cut Analysis" icon={<Target className="w-4 h-4 text-amber-500" />} className="bg-amber-50/30 border-amber-100">
                <h5 className="text-sm font-black text-slate-900 mb-3 uppercase tracking-tight">CME FedWatch Tool</h5>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-amber-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-black uppercase text-slate-400">Probability of Pause</span>
                      <span className="text-[10px] font-black text-slate-900">92.4%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[92.4%]"></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-amber-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-black uppercase text-slate-400">Probability of Cut</span>
                      <span className="text-[10px] font-black text-slate-900">7.6%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 w-[7.6%]"></div>
                    </div>
                  </div>
                </div>
                <p className="text-[9px] text-amber-700 font-bold uppercase mt-6 leading-relaxed">
                  * Market pricing suggests the first 25bps cut will occur in the June FOMC meeting.
                </p>
              </GlassCard>

              <GlassCard title="Liquidity Cycle" icon={<Zap className="w-4 h-4 text-amber-500" />} className="h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-4 animate-pulse">
                  <Layers size={32} />
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase mb-2 tracking-tight">Quantitative Easing</h4>
                <p className="text-[10px] text-slate-500 font-medium px-6 leading-relaxed">
                  Monitor the Fed's balance sheet for shifts from tightening (QT) to easing (QE).
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* 7. LEARN WHAT IS TRADING */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">First, Learn What is Trading</h2>
            <p className="text-slate-500 font-medium">Master the markets from zero to institutional level.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Market Basics", d: "Understand price action, candlesticks, and market structure.", level: "Level 1", color: "bg-emerald-500" },
              { t: "Technical Node", d: "Learn indicators, fibonacci levels, and trend analysis.", level: "Level 2", color: "bg-sky-500" },
              { t: "Risk Protocol", d: "Manage your capital like a pro. Stop loss and liquidation control.", level: "Level 3", color: "bg-rose-500" },
            ].map((course, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-emerald-200 transition-all group">
                <div className={`w-10 h-10 rounded-xl ${course.color} flex items-center justify-center text-white text-[10px] font-black mb-6`}>
                  {course.level}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase italic tracking-tight">{course.t}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{course.d}</p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 group-hover:gap-3 transition-all">
                  Start Learning <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 7. BEST EXCHANGES */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Recommended Exchanges</h3>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mt-1">Tier-1 Institutional Gateways</p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
              <ShieldAlert size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Verified Security</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "Binance", d: "World's largest exchange by volume.", tags: ["Spot", "Futures", "Earn"], trust: "9.9", color: "from-amber-400 to-amber-600" },
              { n: "Bybit", d: "Next-gen trading platform with high liquidity.", tags: ["Futures", "Copy Trading"], trust: "9.7", color: "from-slate-700 to-slate-900" },
              { n: "OKX", d: "Leading Web3 ecosystem and trading hub.", tags: ["DEX", "Spot", "Mining"], trust: "9.8", color: "from-blue-500 to-blue-700" },
              { n: "Coinbase", d: "Most trusted US-based institutional gateway.", tags: ["Institutional", "Base L2"], trust: "9.9", color: "from-blue-600 to-blue-800" },
              { n: "Phantom", d: "Premier Solana gateway for meme hunting.", tags: ["Solana", "DEX", "NFTs"], trust: "9.5", color: "from-purple-500 to-purple-700" },
              { n: "MetaMask", d: "Essential EVM gateway for decentralized finance.", tags: ["EVM", "Bridge", "Swap"], trust: "9.6", color: "from-orange-400 to-orange-600" },
            ].map((app, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${app.color} opacity-[0.03] rounded-bl-[5rem] group-hover:opacity-[0.08] transition-opacity`}></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center font-black text-slate-900 group-hover:scale-110 transition-transform">
                    {app.n[0]}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trust Score</div>
                    <div className="text-lg font-black text-emerald-600 italic">{app.trust}</div>
                  </div>
                </div>
                <h5 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight italic">{app.n}</h5>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">{app.d}</p>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-black uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. BEST TOOLS */}
        <section className="mb-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Best Analysis Tools</h3>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mt-2 italic">Professional Intelligence Stack</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "TradingView", c: "Technical", d: "Advanced Charting" },
              { n: "Arkham", c: "On-Chain", d: "Intelligence Platform" },
              { n: "DexScreener", c: "DEX", d: "Real-time Meme Hunting" },
              { n: "Glassnode", c: "On-Chain", d: "Market Data Analysis" },
              { n: "Coinglass", c: "Futures", d: "Liquidation Tracking" },
              { n: "WhaleAlert", c: "Whale", d: "Large Transaction Monitor" },
              { n: "Nansen", c: "Analytics", d: "Smart Money Tracking" },
              { n: "DefiLlama", c: "DeFi", d: "TVL & Yield Analytics" },
            ].map((tool, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="flex flex-col p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Activity size={18} />
                </div>
                <div className="text-[8px] font-black uppercase text-emerald-600 tracking-widest mb-1">{tool.c}</div>
                <h5 className="text-sm font-black text-slate-900 uppercase mb-1">{tool.n}</h5>
                <p className="text-[10px] text-slate-400 font-bold leading-tight">{tool.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}