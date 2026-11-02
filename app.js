const demoDonors = [
  {name:"Demo Aarav Sharma",group:"O+",city:"Delhi",available:true},{name:"Demo Priya Nair",group:"A+",city:"Kochi",available:true},
  {name:"Demo Rohan Patil",group:"B+",city:"Pune",available:false},{name:"Demo Sneha Iyer",group:"AB+",city:"Chennai",available:true},
  {name:"Demo Karan Mehta",group:"O-",city:"Mumbai",available:true},{name:"Demo Ananya Das",group:"A-",city:"Kolkata",available:true},
  {name:"Demo Vikram Reddy",group:"B-",city:"Hyderabad",available:false},{name:"Demo Meera Joshi",group:"AB-",city:"Jaipur",available:true},
  {name:"Demo Arjun Singh",group:"O+",city:"Lucknow",available:true},{name:"Demo Fatima Khan",group:"B+",city:"Bengaluru",available:true},
  {name:"Demo Rahul Verma",group:"A+",city:"Bhopal",available:false},{name:"Demo Kavya Menon",group:"O-",city:"Bengaluru",available:true}
];
const results = document.getElementById("donorResults");
function renderDonors(){
  const group=document.getElementById("bloodFilter").value;
  const city=document.getElementById("cityFilter").value.trim().toLowerCase();
  const available=document.getElementById("availabilityFilter").value;
  const filtered=demoDonors.filter(d=>(!group||d.group===group)&&(!city||d.city.toLowerCase().includes(city))&&(!available||(available==="yes")===d.available));
  results.innerHTML=filtered.length?filtered.map(d=>`<article class="donor-card"><span class="blood-chip">${d.group}</span><div><b>${d.name}</b><small>${d.city} · Fictional demo record</small></div><span class="availability ${d.available?"":"off"}">${d.available?"Available*":"Unavailable*"}</span></article>`).join(""):'<p class="muted">No demo records match these filters.</p>';
}
document.getElementById("searchDonors").addEventListener("click",renderDonors);
renderDonors();
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
function saveDemo(key,data){const all=JSON.parse(localStorage.getItem(key)||"[]");all.push({...data,submittedAt:new Date().toISOString()});localStorage.setItem(key,JSON.stringify(all));}
document.getElementById("donorForm").addEventListener("submit",e=>{
  e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
  const data=Object.fromEntries(new FormData(form).entries());
  if(Number(data.age)<18||Number(data.age)>65){document.getElementById("donorMessage").textContent="Donor registration age must be between 18 and 65.";return;}
  saveDemo("lifeline_demo_donors",data);form.reset();
  document.getElementById("donorMessage").textContent="Demo registration saved in this browser only. No real coordinator has received it.";
});
document.getElementById("requestForm").addEventListener("submit",e=>{
  e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
  const data=Object.fromEntries(new FormData(form).entries());saveDemo("lifeline_demo_requests",data);form.reset();
  document.getElementById("requestMessage").textContent="Demo request saved in this browser only. Contact the hospital blood bank directly; this site does not notify donors.";
});
