# AI Pair-Programming Log — Sprint 6 ShopZone

## Session 1 — Routing Architecture
**Prompt:** React Router v6 mein BrowserRouter ke saath dynamic /product/:id route configure karne ka sahi tareeka kya hai?
**AI Response Summary:** BrowserRouter poore tree ko wrap karta hai, Routes ke andar Route define karte hain, :id dynamic segment hai useParams() se extract karte hain.
**My Understanding:** main.jsx mein BrowserRouter root pe hai, App.jsx mein Routes/Route. useParams hook se URL segment milta hai.

## Session 2 — Duplicate Cart Prevention (FAQ#4)
**Prompt:** Context API mein addToCart mein duplicate item check kaise karein jab id already exist karti ho?
**AI Response Summary:** state.find() se existing item dhoondo, agar mila toh quantity increment karo (immutably via map), warna push karo.
**My Understanding:** Functional setState use kiya, find se id match, map se immutable update, else spread push.

## Session 3 — localStorage Persistence
**Prompt:** CartContext ko localStorage ke saath sync karne ka best pattern kya hai?
**AI Response Summary:** useState mein lazy initializer use karo (localStorage se read), aur useEffect mein localStorage pe write karo har change pe.
**My Understanding:** Lazy init refresh pe data hydrate karta hai, useEffect automatic save karta hai.

## Session 4 — Vercel 404 on Refresh
**Prompt:** Vercel pe deploy karne ke baad /product/5 refresh pe 404 aata hai, fix?
**AI Response Summary:** vercel.json mein rewrite rule add karo jo sab routes / pe redirect kar de, React Router handle karega.
**My Understanding:** Vercel static file dhoondhta hai, SPA fallback chahiye.

## Session 5 — Protected Route Pattern
**Prompt:** Protected route banane ka cleanest React Router v6 tareeka kya hai?
**AI Response Summary:** Ek wrapper component banao jo useAuth check kare, agar not auth toh <Navigate to="/login" replace /> return kare.
**My Understanding:** replace se back button loop avoid hota hai, reusable wrapper clean hai.