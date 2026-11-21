import*as F from"node:fs";const I="/input/",O="/output/",J=(a,x)=>a.includes(x);let w,E,T,P,M,H,r,q,x,y,k;
for(let d of F.readdirSync(I))try{F.mkdirSync(O+d,{recursive:!0});let s=""+F.readFileSync(I+d+"/level.txt");w=s.indexOf("\n")+1;E=[-w,w,-1,1];T="udlr";let Z=[[[],[]],[[],[]],[[],[]],[[],[]]],U=[],L=[],live={},out="",A=i=>s[i]!="#"&&s[i]!="\n",D=i=>((i/w|0)>8?2:0)+((i%w-1)/7|0),V=(p,b)=>{r={[p]:""};q=[p];M=p;for(let c of q)for(k=0;k<4;k++)y=c+E[k],A(y)&&!J(b,y)&&!J(H,y)&&!(y in r)&&(r[y]=r[c]+T[k],q.push(y),M=y<M?y:M);return r};P=0;H=[];
for(let i=0;s[i];i++){let c=s[i],z=D(i);(c=="$"|c=="*")&&(Z[z][0].push(i),U.push(i));(c=="."|c=="*"|c=="+")&&(Z[z][1].push(i),L.push(i),live[i]=1);J("@+",c)&&(P=i)}
for(x of L)for(k=0;k<4;k++)y=x-E[k],A(y)&&A(y-E[k])&&!live[y]&&(live[y]=1,L.push(y));
for(let[bs,gs]of Z)if(bs.length){H=U.filter(x=>!J(bs,x));U=H.concat(gs);let seen={},Q=[[bs,P,""]],mv="",np=P,b,p,m;
W:for(let t of Q){[b,p,m]=t;r=V(p,b);x=M+"|"+[...b].sort((a,b)=>a-b);if(seen[x])continue;seen[x]=1;
for(let bi=0;bi<b.length;bi++)for(k=0;k<4;k++){let st=b[bi]-E[k],ds=b[bi]+E[k];
if(st in r&&live[ds]&&!J(b,ds)){let nb=b.slice();nb[bi]=ds;let nm=m+r[st]+T[k];
if(nb.every(x=>J(gs,x))){mv=nm;np=b[bi];break W}
Q.push([nb,b[bi],nm])}}}
out+=mv;P=np}
F.writeFileSync(O+d+"/solution.txt",out)}catch{}
