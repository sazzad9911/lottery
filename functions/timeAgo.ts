function timeAgo(dateString: string,lang:string): string {
    const now = new Date();
    const pastDate = new Date(dateString);
    const differenceInSeconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);
  
    const units = [
      { label: lang=="en"?"y":"বছর", seconds: 60 * 60 * 24 * 365 }, // years
      { label: lang=="en"?"mo":"মাস", seconds: 60 * 60 * 24 * 30 }, // months (approximate)
      { label: lang=="en"?"w":"সপ্তাহ", seconds: 60 * 60 * 24 * 7 },   // weeks
      { label: lang=="en"?"d":"দিন", seconds: 60 * 60 * 24 },       // days
      { label: lang=="en"?"h":"ঘন্টা", seconds: 60 * 60 },            // hours
      { label: lang=="en"?"m":"মিনিট", seconds: 60 },                 // minutes
      { label: lang=="en"?"s":"সেকেন্ড", seconds: 1 },                  // seconds
    ]; 
  
    for (const unit of units) {
      const interval = Math.floor(differenceInSeconds / unit.seconds);
      if (interval >= 1) {
        return `${interval} ${unit.label} ${lang=="en"?"ago":"আগে"}`;
      }
    }
  
    return lang=="en"?"Just now":"এখনি"; // for cases where the difference is less than 1 second
  }
export default timeAgo