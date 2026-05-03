// Content enrichment patch - enhances thin article content
(function(){
if(!window.ARTICLES) return;

var rich = {};

rich[1] = {
toc:[{id:"intro",text:"مقدمة عن سوق الأسهم"},{id:"account",text:"فتح حساب استثماري"},{id:"choose",text:"كيف تختار الأسهم"},{id:"strategies",text:"استراتيجيات المبتدئين"},{id:"risks",text:"إدارة المخاطر"},{id:"mistakes",text:"أخطاء شائعة"},{id:"summary",text:"خلاصة ونصائح"}],
tocEn:[{id:"intro",text:"Stock Market Intro"},{id:"account",text:"Open Account"},{id:"choose",text:"Choose Stocks"},{id:"strategies",text:"Beginner Strategies"},{id:"risks",text:"Risk Management"},{id:"mistakes",text:"Common Mistakes"},{id:"summary",text:"Summary & Tips"}],
content:`<h2 id="intro">مقدمة عن سوق الأسهم السعودية</h2>
<p>سوق الأسهم السعودية (تداول) هو أكبر سوق مالي في منطقة الشرق الأوسط وشمال أفريقيا، حيث تتجاوز قيمته السوقية 10 تريليونات ريال سعودي. يضم السوق أكثر من 200 شركة مدرجة تتوزع على 20 قطاعاً اقتصادياً مختلفاً، من بينها قطاعات البنوك والطاقة والبتروكيماويات والعقارات والتقنية.</p>
<p>منذ انضمام السوق السعودي إلى مؤشرات MSCI وFTSE العالمية، شهد تداول تدفقات استثمارية أجنبية ضخمة تجاوزت 200 مليار ريال، مما عزز من عمق السوق وسيولته. هذا يعني أن المستثمر السعودي اليوم يتداول في سوق بمعايير عالمية.</p>
<p>الاستثمار في الأسهم ليس مقامرة كما يعتقد البعض، بل هو أداة لبناء الثروة على المدى الطويل. تاريخياً، حقق مؤشر تاسي عوائد سنوية متوسطة تتراوح بين 8-12% على المدى البعيد، متفوقاً على التضخم وعوائد الودائع البنكية بفارق كبير.</p>

<h2 id="account">فتح حساب استثماري</h2>
<p>الخطوة الأولى هي فتح حساب استثماري لدى وسيط مرخص من هيئة السوق المالية (CMA). الوسطاء المرخصون في السعودية يشملون الراجحي كابيتال، الأهلي كابيتال، الجزيرة كابيتال، السعودي الفرنسي كابيتال، وغيرها. كل وسيط يقدم منصة تداول إلكترونية خاصة به.</p>
<p><strong>المتطلبات الأساسية:</strong></p>
<ul>
<li>بطاقة هوية وطنية أو إقامة سارية المفعول</li>
<li>رقم آيبان بنكي مرتبط باسمك</li>
<li>عنوان وطني مسجل في البريد السعودي</li>
<li>رقم جوال مفعّل لتلقي رموز التحقق</li>
</ul>
<p>معظم الوسطاء يتيحون التسجيل إلكترونياً عبر تطبيقاتهم خلال 24-48 ساعة. بعد فتح الحساب، ستحتاج لتحويل مبلغ مالي إلى محفظتك الاستثمارية لبدء التداول. لا يوجد حد أدنى إلزامي، لكن يُنصح بالبدء بمبلغ لا يقل عن 5,000 ريال لتتمكن من التنويع.</p>

<h2 id="choose">كيف تختار الأسهم المناسبة</h2>
<p>اختيار الأسهم يتطلب دراسة وتحليل. هناك مدرستان رئيسيتان: التحليل الأساسي الذي ينظر في البيانات المالية للشركة، والتحليل الفني الذي يدرس حركة السعر والأنماط البيانية.</p>
<p><strong>معايير التحليل الأساسي:</strong></p>
<ul>
<li><strong>نسبة السعر إلى الربحية (P/E):</strong> تقارن سعر السهم بأرباح الشركة. النسبة المقبولة في تداول بين 12-20</li>
<li><strong>العائد على حقوق المساهمين (ROE):</strong> يقيس كفاءة الإدارة. ابحث عن شركات بعائد فوق 15%</li>
<li><strong>نسبة الدين إلى حقوق الملكية:</strong> الشركات ذات الديون المنخفضة أكثر أماناً</li>
<li><strong>نمو الأرباح:</strong> ابحث عن شركات تنمو أرباحها بنسبة 10% سنوياً على الأقل</li>
<li><strong>توزيعات الأرباح:</strong> الشركات التي توزع أرباحاً منتظمة تدل على صحة مالية جيدة</li>
</ul>
<p>للمبتدئين، يُنصح بالتركيز على الشركات القيادية (Blue Chips) مثل أرامكو وسابك والراجحي وبنك الأهلي وSTC. هذه الشركات تتميز بالاستقرار والسيولة العالية وتوزيعات الأرباح المنتظمة.</p>

<h2 id="strategies">استراتيجيات المبتدئين</h2>
<p><strong>1. استراتيجية الشراء والاحتفاظ (Buy & Hold):</strong> اشترِ أسهم شركات قوية واحتفظ بها لسنوات. هذه الاستراتيجية تقلل تأثير التقلبات قصيرة المدى وتستفيد من النمو طويل المدى.</p>
<p><strong>2. متوسط التكلفة (Dollar Cost Averaging):</strong> استثمر مبلغاً ثابتاً شهرياً بغض النظر عن سعر السوق. مثلاً، 2,000 ريال شهرياً. هذا يقلل مخاطر التوقيت ويبني محفظة متوسطة التكلفة.</p>
<p><strong>3. التنويع القطاعي:</strong> لا تضع كل أموالك في قطاع واحد. وزّع بين البنوك والطاقة والاتصالات والعقار لتقليل المخاطر.</p>
<p><strong>4. إعادة استثمار التوزيعات:</strong> بدلاً من سحب أرباح التوزيعات، أعد استثمارها لشراء أسهم إضافية. قوة الفائدة المركبة ستضاعف ثروتك مع الوقت.</p>

<h2 id="risks">إدارة المخاطر</h2>
<p>إدارة المخاطر هي الفرق بين المستثمر الناجح والخاسر. القاعدة الذهبية: لا تستثمر أموالاً تحتاجها خلال السنوات الثلاث القادمة.</p>
<p><strong>قواعد أساسية:</strong></p>
<ul>
<li>نوّع محفظتك عبر 8-15 سهماً من قطاعات مختلفة</li>
<li>لا تخصص أكثر من 15% من محفظتك لسهم واحد</li>
<li>استخدم أوامر وقف الخسارة (Stop Loss) بنسبة 7-10% تحت سعر الشراء</li>
<li>احتفظ بـ 10-20% من محفظتك كسيولة نقدية لاقتناص الفرص</li>
<li>لا تتداول بالهامش (القروض) كمبتدئ أبداً</li>
</ul>
<p>تذكّر أن الخسارة جزء طبيعي من الاستثمار. المستثمر الناجح ليس من لا يخسر، بل من يحد خسائره ويعظم مكاسبه.</p>

<h2 id="mistakes">أخطاء شائعة يقع فيها المبتدئون</h2>
<p><strong>1. القطيع:</strong> شراء سهم لأن "الكل يشتريه" دون بحث. غالباً تكون قد تأخرت عن الفرصة.</p>
<p><strong>2. التداول المفرط:</strong> البيع والشراء اليومي يأكل أرباحك في العمولات ويزيد احتمالية الخطأ.</p>
<p><strong>3. عدم التعلم:</strong> الدخول بدون فهم أساسيات التحليل المالي. خصص شهراً للتعلم قبل أول عملية شراء.</p>
<p><strong>4. العاطفة:</strong> الطمع يجعلك تشتري في القمة، والخوف يجعلك تبيع في القاع. ضع خطة والتزم بها.</p>
<p><strong>5. التركيز على المضاربة:</strong> المضاربة ليست استثماراً. كمبتدئ، ركّز على الاستثمار طويل المدى.</p>

<h2 id="summary">خلاصة ونصائح ختامية</h2>
<p>الاستثمار في سوق الأسهم السعودية فرصة حقيقية لبناء ثروة مستدامة، لكنه يتطلب صبراً وتعلماً مستمراً. ابدأ صغيراً، تعلّم من أخطائك، ولا تتوقف عن القراءة والتثقيف المالي. مع الوقت والانضباط، ستجد أن السوق أداة قوية لتحقيق أهدافك المالية.</p>`,
contentEn:`<h2 id="intro">Introduction to the Saudi Stock Market</h2>
<p>The Saudi Stock Exchange (Tadawul) is the largest financial market in the Middle East and North Africa, with a market capitalization exceeding 10 trillion SAR. It lists over 200 companies across 20 economic sectors, including banking, energy, petrochemicals, real estate, and technology.</p>
<p>Since Tadawul joined global indices like MSCI and FTSE, the market has attracted over 200 billion SAR in foreign investment inflows, deepening market liquidity. Saudi investors today trade in a market that meets international standards.</p>
<p>Stock investing is not gambling — it's a proven wealth-building tool. Historically, the TASI index has delivered average annual returns of 8-12% over the long term, significantly outperforming inflation and bank deposits.</p>

<h2 id="account">Opening an Investment Account</h2>
<p>The first step is opening an investment account with a CMA-licensed broker. Licensed brokers include Al Rajhi Capital, Alahliyyah Capital, Al Jazira Capital, and others. Each offers its own electronic trading platform.</p>
<p><strong>Basic Requirements:</strong></p>
<ul>
<li>Valid national ID or residency permit</li>
<li>Bank IBAN registered in your name</li>
<li>National address registered with Saudi Post</li>
<li>Active mobile number for verification codes</li>
</ul>
<p>Most brokers allow electronic registration within 24-48 hours. After opening your account, transfer funds to your investment portfolio. There's no mandatory minimum, but starting with at least 5,000 SAR is recommended for proper diversification.</p>

<h2 id="choose">How to Choose the Right Stocks</h2>
<p>Stock selection requires research and analysis. Two main schools exist: fundamental analysis examining company financials, and technical analysis studying price movements and chart patterns.</p>
<p><strong>Fundamental Analysis Criteria:</strong></p>
<ul>
<li><strong>Price-to-Earnings Ratio (P/E):</strong> Compares stock price to earnings. Acceptable range on Tadawul is 12-20</li>
<li><strong>Return on Equity (ROE):</strong> Measures management efficiency. Look for companies above 15%</li>
<li><strong>Debt-to-Equity Ratio:</strong> Lower-debt companies are safer</li>
<li><strong>Earnings Growth:</strong> Seek companies growing earnings at least 10% annually</li>
<li><strong>Dividends:</strong> Regular dividend-paying companies indicate financial health</li>
</ul>
<p>Beginners should focus on Blue Chip stocks like Aramco, SABIC, Al Rajhi, Al Ahli Bank, and STC — known for stability, high liquidity, and regular dividends.</p>

<h2 id="strategies">Beginner Strategies</h2>
<p><strong>1. Buy & Hold:</strong> Purchase strong company stocks and hold for years. This strategy reduces short-term volatility impact and benefits from long-term growth.</p>
<p><strong>2. Dollar Cost Averaging:</strong> Invest a fixed amount monthly regardless of market price — for example, 2,000 SAR monthly. This reduces timing risk and builds an average-cost portfolio.</p>
<p><strong>3. Sector Diversification:</strong> Don't put all your money in one sector. Spread across banking, energy, telecom, and real estate to reduce risk.</p>
<p><strong>4. Reinvest Dividends:</strong> Instead of withdrawing dividends, reinvest them to buy additional shares. Compound interest will multiply your wealth over time.</p>

<h2 id="risks">Risk Management</h2>
<p>Risk management separates successful investors from losers. The golden rule: never invest money you'll need within the next three years.</p>
<p><strong>Essential Rules:</strong></p>
<ul>
<li>Diversify across 8-15 stocks from different sectors</li>
<li>Never allocate more than 15% of your portfolio to a single stock</li>
<li>Use Stop Loss orders at 7-10% below purchase price</li>
<li>Keep 10-20% of your portfolio as cash to seize opportunities</li>
<li>Never trade on margin (loans) as a beginner</li>
</ul>

<h2 id="mistakes">Common Beginner Mistakes</h2>
<p><strong>1. Herd Mentality:</strong> Buying a stock because "everyone is buying it" without research.</p>
<p><strong>2. Overtrading:</strong> Daily buying and selling eats your profits in commissions.</p>
<p><strong>3. Not Learning:</strong> Entering without understanding financial analysis basics.</p>
<p><strong>4. Emotional Trading:</strong> Greed makes you buy at the top; fear makes you sell at the bottom.</p>
<p><strong>5. Speculation Focus:</strong> Speculation isn't investing. As a beginner, focus on long-term investing.</p>

<h2 id="summary">Summary and Final Tips</h2>
<p>Investing in Saudi stocks is a real opportunity to build sustainable wealth, but it requires patience and continuous learning. Start small, learn from mistakes, and never stop educating yourself financially.</p>`
};

rich[2] = {
toc:[{id:"intro",text:"ما هو التحليل الفني"},{id:"ma",text:"المتوسطات المتحركة"},{id:"rsi",text:"مؤشر RSI"},{id:"macd",text:"مؤشر MACD"},{id:"support",text:"الدعم والمقاومة"},{id:"patterns",text:"الأنماط البيانية"},{id:"tips",text:"نصائح عملية"}],
tocEn:[{id:"intro",text:"What is Technical Analysis"},{id:"ma",text:"Moving Averages"},{id:"rsi",text:"RSI Indicator"},{id:"macd",text:"MACD Indicator"},{id:"support",text:"Support & Resistance"},{id:"patterns",text:"Chart Patterns"},{id:"tips",text:"Practical Tips"}],
content:`<h2 id="intro">ما هو التحليل الفني؟</h2>
<p>التحليل الفني هو دراسة حركة الأسعار التاريخية وأحجام التداول للتنبؤ باتجاه السعر المستقبلي. يعتمد على فرضية أن التاريخ يعيد نفسه وأن سلوك المتداولين يتكرر في أنماط يمكن التعرف عليها.</p>
<p>لا يهتم التحليل الفني بالقيمة الحقيقية للشركة (هذا دور التحليل الأساسي)، بل يركز على العرض والطلب كما ينعكسان في الرسم البياني. المحللون الفنيون يؤمنون أن "السعر يعكس كل شيء" — أي أن جميع المعلومات المتاحة مشمولة بالفعل في سعر السهم.</p>

<h2 id="ma">المتوسطات المتحركة (Moving Averages)</h2>
<p>المتوسط المتحرك هو أبسط وأهم أدوات التحليل الفني. يحسب متوسط سعر الإغلاق لفترة زمنية محددة ويرسمه كخط على الرسم البياني.</p>
<p><strong>أنواع المتوسطات الشائعة:</strong></p>
<ul>
<li><strong>MA50 (50 يوم):</strong> يعكس الاتجاه المتوسط. كسر السعر فوقه إشارة إيجابية</li>
<li><strong>MA200 (200 يوم):</strong> يعكس الاتجاه طويل المدى. يُعتبر "خط الفصل" بين السوق الصاعد والهابط</li>
<li><strong>التقاطع الذهبي:</strong> عندما يقطع MA50 فوق MA200 — إشارة شراء قوية</li>
<li><strong>تقاطع الموت:</strong> عندما يقطع MA50 تحت MA200 — إشارة بيع تحذيرية</li>
</ul>
<p>نصيحة عملية: استخدم MA200 كمرجع رئيسي. إذا كان السهم فوق MA200، فالاتجاه العام صاعد والعكس صحيح.</p>

<h2 id="rsi">مؤشر القوة النسبية (RSI)</h2>
<p>مؤشر RSI يقيس سرعة وحجم تغيرات السعر على مقياس من 0 إلى 100. طوّره وايلدر عام 1978 وأصبح من أكثر المؤشرات استخداماً عالمياً.</p>
<p><strong>كيف تقرأه:</strong></p>
<ul>
<li><strong>فوق 70:</strong> المنطقة مشبعة شراء — السهم قد يكون مبالغاً في سعره وقد يتراجع</li>
<li><strong>تحت 30:</strong> المنطقة مشبعة بيع — السهم قد يكون رخيصاً وقد يرتد صعوداً</li>
<li><strong>حول 50:</strong> منطقة محايدة</li>
</ul>
<p><strong>الانحراف (Divergence):</strong> عندما يصعد السعر لكن RSI ينخفض، هذا تحذير من انعكاس قادم. والعكس صحيح — انخفاض السعر مع ارتفاع RSI إشارة انعكاس إيجابية.</p>

<h2 id="macd">مؤشر MACD</h2>
<p>MACD (تقارب وتباعد المتوسطات) يجمع بين اتجاه الترند وزخم التغيير. يتكون من خطين وشريط بياني (Histogram).</p>
<p><strong>مكوناته:</strong></p>
<ul>
<li><strong>خط MACD:</strong> الفرق بين المتوسط المتحرك الأسي 12 يوم و 26 يوم</li>
<li><strong>خط الإشارة:</strong> المتوسط المتحرك الأسي 9 أيام لخط MACD</li>
<li><strong>الهستوجرام:</strong> يمثل الفرق بين الخطين بصرياً</li>
</ul>
<p><strong>إشارات التداول:</strong> عندما يقطع خط MACD فوق خط الإشارة = إشارة شراء. عندما يقطع تحته = إشارة بيع. كلما كان التقاطع أبعد عن خط الصفر، كانت الإشارة أقوى.</p>

<h2 id="support">مستويات الدعم والمقاومة</h2>
<p>الدعم هو مستوى سعري يتوقع أن يتوقف عنده الهبوط بسبب تركز الطلب. المقاومة هي مستوى يتوقع أن يتوقف عنده الصعود بسبب تركز العرض.</p>
<p><strong>كيف تحددها:</strong></p>
<ul>
<li>ابحث عن مستويات سعرية ارتد منها السعر عدة مرات في الماضي</li>
<li>الأرقام المستديرة (50، 100، 200 ريال) غالباً تكون مستويات نفسية مهمة</li>
<li>كلما اختبر السعر مستوى معيناً أكثر، أصبح أقوى</li>
</ul>
<p>عندما يخترق السعر مستوى مقاومة، يتحول إلى دعم جديد والعكس صحيح.</p>

<h2 id="patterns">الأنماط البيانية الأساسية</h2>
<p><strong>أنماط انعكاسية:</strong></p>
<ul>
<li><strong>الرأس والكتفين:</strong> نمط انعكاسي هبوطي يظهر في نهاية الاتجاه الصاعد</li>
<li><strong>القاع المزدوج:</strong> نمط انعكاسي صعودي يشبه حرف W</li>
<li><strong>القمة المزدوجة:</strong> نمط انعكاسي هبوطي يشبه حرف M</li>
</ul>
<p><strong>أنماط استمرارية:</strong></p>
<ul>
<li><strong>المثلث الصاعد:</strong> يشير لاستمرار الصعود</li>
<li><strong>العلم:</strong> توقف مؤقت قبل استكمال الاتجاه</li>
</ul>

<h2 id="tips">نصائح عملية للتحليل الفني</h2>
<p><strong>1.</strong> لا تعتمد على مؤشر واحد. استخدم 2-3 مؤشرات للتأكيد المتبادل.</p>
<p><strong>2.</strong> اجمع بين التحليل الفني والأساسي. التحليل الفني يحدد التوقيت، والأساسي يحدد الجودة.</p>
<p><strong>3.</strong> تدرّب على حساب ورقي (Paper Trading) قبل المخاطرة بأموال حقيقية.</p>
<p><strong>4.</strong> الإطار الزمني مهم: الرسم اليومي للمستثمر، وذو الأربع ساعات للمتداول.</p>
<p><strong>5.</strong> لا يوجد مؤشر مثالي. كل الأدوات تعطي إشارات خاطئة أحياناً.</p>`,
contentEn:`<h2 id="intro">What is Technical Analysis?</h2>
<p>Technical analysis studies historical price movements and trading volumes to predict future price direction. It's based on the premise that history repeats itself and trader behavior follows recognizable patterns.</p>
<p>Technical analysis doesn't evaluate a company's intrinsic value — that's fundamental analysis. Instead, it focuses on supply and demand as reflected in charts. Technicians believe "price discounts everything."</p>

<h2 id="ma">Moving Averages</h2>
<p>The moving average is the simplest and most important technical analysis tool. It calculates the average closing price over a specific period and plots it as a line on the chart.</p>
<ul>
<li><strong>MA50 (50-day):</strong> Reflects medium-term trend. Price crossing above it is a positive signal</li>
<li><strong>MA200 (200-day):</strong> Reflects long-term trend. The dividing line between bull and bear markets</li>
<li><strong>Golden Cross:</strong> When MA50 crosses above MA200 — strong buy signal</li>
<li><strong>Death Cross:</strong> When MA50 crosses below MA200 — warning sell signal</li>
</ul>

<h2 id="rsi">RSI Indicator</h2>
<p>RSI measures the speed and magnitude of price changes on a 0-100 scale. Above 70 means overbought; below 30 means oversold. Watch for divergence: when price rises but RSI falls, a reversal may be coming.</p>

<h2 id="macd">MACD Indicator</h2>
<p>MACD combines trend direction and momentum. When the MACD line crosses above the signal line = buy. Below = sell. The further from zero the crossover occurs, the stronger the signal.</p>

<h2 id="support">Support and Resistance Levels</h2>
<p>Support is a price level where demand concentrates and declines are expected to pause. Resistance is where supply concentrates and advances stall. When broken, support becomes resistance and vice versa.</p>

<h2 id="patterns">Basic Chart Patterns</h2>
<p>Reversal patterns include Head & Shoulders, Double Bottom (W), and Double Top (M). Continuation patterns include Ascending Triangles and Flags.</p>

<h2 id="tips">Practical Tips</h2>
<p>Use 2-3 indicators for confirmation. Combine technical with fundamental analysis. Practice paper trading first. No indicator is perfect — all give false signals sometimes.</p>`
};

// Apply patches
window.ARTICLES.forEach(function(a){
  if(rich[a.id]){
    a.content = rich[a.id].content;
    a.contentEn = rich[a.id].contentEn;
    a.toc = rich[a.id].toc;
    a.tocEn = rich[a.id].tocEn;
  }
});

})();
