import React from 'react'

function ChildsHome2() {
  return (
    <div>
        <div className='space-y-6 shadow px-4 md:px-5 lg:px-10 pt-6 pb-8 lg:pt-8 lg:pb-12'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800'>What is Cryptocurrency and how does it work?</h1>
            <div>
                <img className='w-full' src={require('../assets/3.jpg')} alt=''/>
            </div>
            <div className=' space-y-5 pt-2'>
                <div className=' space-y-4'>
                    <h1 className='font-semibold text-xl text-gray-700'>
                        Cryptocurrency – meaning and definition
                    </h1>
                    <p>
                        Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.
                    </p>
                </div>

                <div className=' space-y-4'>
                    <h1 className='font-semibold text-xl text-gray-700'>
                        What is cryptocurrency?
                    </h1>
                    <p>
                        Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.
                    </p>
                    <p>
                        Cryptocurrency received its name because it uses encryption to verify transactions. This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers. The aim of encryption is to provide security and safety.
                    </p>
                    <p>
                        The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row lg:*:w-6/12 space-y-5 lg:space-y-0 lg:space-x-6 pt-2'>
                    <div>
                        <img className='w-full' src={require('../assets/1.jpg')} alt='' />
                    </div>

                    <div className=' space-y-4'>
                        <h1 className='font-semibold text-xl text-gray-700'>
                            How does cryptocurrency work?
                        </h1>
                        <p>
                            Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.
                        </p>
                        <p>
                            Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.
                        </p>
                    </div>
                </div>

                <div className='space-y-4 pt-2'>
                    <p>
                        If you own cryptocurrency, you don’t own anything tangible. What you own is a key that allows you to move a record or a unit of measure from   one person to another without a trusted third party.
                    </p>
                    <p>
                        Although Bitcoin has been around since 2009, cryptocurrencies and applications of blockchain technology are still emerging in financial terms, and more uses are expected in the future. Transactions including bonds, stocks, and other financial assets could eventually be traded using the technology.
                    </p>
                </div>

                <div className='w-full pt-5 border-b border-gray-200'></div>

                <div className='pt-3 *:space-y-4 space-y-4'>
                    <div>
                        <h1 className='font-semibold text-xl text-gray-700'>
                            Cryptocurrency examples
                        </h1>
                        <p>There are thousands of cryptocurrencies. Some of the best known include:</p>
                    </div>

                    <div>
                        <h1 className=' font-bold text-lg text-gray-800'>Bitcoin:</h1>
                        <p>
                            Founded in 2009, Bitcoin was the first cryptocurrency and is still the most commonly traded. The currency was developed by Satoshi Nakamoto – widely believed to be a pseudonym for an individual or group of people whose precise identity remains unknown.
                        </p>
                    </div>

                    <div>
                        <h1 className=' font-bold text-lg text-gray-800'>Ethereum:</h1>
                        <p>
                            Developed in 2015, Ethereum is a blockchain platform with its own cryptocurrency, called Ether (ETH) or Ethereum. It is the most popular cryptocurrency after Bitcoin.
                        </p>
                    </div>

                    <div>
                        <h1 className=' font-bold text-lg text-gray-800'>Litecoin:</h1>
                        <p>
                            This currency is most similar to bitcoin but has moved more quickly to develop new innovations, including faster payments and processes to allow more transactions.
                        </p>
                    </div>

                    <div>
                        <h1 className=' font-bold text-lg text-gray-800'>Ripple:</h1>
                        <p>
                            Ripple is a distributed ledger system that was founded in 2012. Ripple can be used to track different kinds of transactions, not just cryptocurrency. The company behind it has worked with various banks and financial institutions.
                        </p>
                        <p>
                            Non-Bitcoin cryptocurrencies are collectively known as “altcoins” to distinguish them from the original.
                        </p>
                    </div>

                    <div>
                        <h1 className='pt-1 font-semibold text-xl text-gray-700'>
                            How to buy cryptocurrency
                        </h1>
                        <p>You may be wondering how to buy cryptocurrency safely. There are typically three steps involved. These are:</p>
                    </div>

                    {/* step1 */}
                    <div className='pt-2'>
                        <div>
                            <h1 className=' font-bold text-lg text-gray-800'>Step 1: Choosing a platform</h1>
                        </div>

                        <div className='pt-2'>
                            <p>
                                The first step is deciding which platform to use. Generally, you can choose between a traditional broker or dedicated cryptocurrency exchange:
                            </p>
                        </div>

                        <div>
                            <ul className='list-disc space-y-3 pl-10'>
                                <li>
                                    <span className='font-semibold text-lg'>Traditional brokers.</span> These are online brokers who offer ways to buy and sell cryptocurrency, as well as other financial assets like stocks, bonds, and ETFs. These platforms tend to offer lower trading costs but fewer crypto features.
                                </li>
                                <li>
                                    <span className='font-semibold text-lg'>Cryptocurrency exchanges.</span> There are many cryptocurrency exchanges to choose from, each offering different cryptocurrencies, wallet storage, interest-bearing account options, and more. Many exchanges charge asset-based fees.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p>
                                When comparing different platforms, consider which cryptocurrencies are on offer, what fees they charge, their security features, storage and withdrawal options, and any educational resources.
                            </p>
                        </div>
                    </div>

                     {/* step2 */}
                     <div className='pt-2'>
                        <h1 className=' font-bold text-lg text-gray-800'>Step 2: Funding your account</h1>
                        <p className='pt-1'>
                            Once you have chosen your platform, the next step is to fund your account so you can begin trading. Most crypto exchanges allow users to purchase crypto using fiat (i.e., government-issued) currencies such as the US Dollar, the British Pound, or the Euro using their debit or credit cards – although this varies by platform.
                        </p>

                        <p>
                            Crypto purchases with credit cards are considered risky, and some exchanges don't support them. Some credit card companies don't allow crypto transactions either. This is because cryptocurrencies are highly volatile, and it is not advisable to risk going into debt — or potentially paying high credit card transaction fees — for certain assets.
                        </p>

                        <p>
                            Some platforms will also accept ACH transfers and wire transfers. The accepted payment methods and time taken for deposits or withdrawals differ per platform. Equally, the time taken for deposits to clear varies by payment method.
                        </p>

                        <p>
                            An important factor to consider is fees. These include potential deposit and withdrawal transaction fees plus trading fees. Fees will vary by payment method and platform, which is something to research at the outset.
                        </p>
                    </div>

                     {/* step3 */}
                     <div className='pt-2'>
                        <div>
                            <h1 className=' font-bold text-lg text-gray-800'>Step 3: Placing an order</h1>
                        </div>

                        <p className='pt-2'>
                            You can place an order via your broker's or exchange's web or mobile platform. If you are planning to buy cryptocurrencies, you can do so by selecting "buy," choosing the order type, entering the amount of cryptocurrencies you want to purchase, and confirming the order. The same process applies to "sell" orders.
                        </p>

                        <p>
                            <span className='font-semibold'>There are also other ways to invest in crypto.</span> These include payment services like PayPal, Cash App, and Venmo, which allow users to buy, sell, or hold cryptocurrencies. In addition, there are the following investment vehicles:
                        </p>

                        <div>
                            <ul className='list-disc space-y-3 pl-10'>
                                <li>
                                    <span className='font-semibold text-lg'>Bitcoin trusts:</span> 
                                    You can buy shares of Bitcoin trusts with a regular brokerage account. These vehicles give retail investors exposure to crypto through the stock market. 
                                </li>
                                <li>
                                    <span className='font-semibold text-lg'>Bitcoin mutual funds:</span> There are Bitcoin ETFs and Bitcoin mutual funds to choose from. 
                                </li>
                                <li>
                                    <span className='font-semibold text-lg'>Blockchain stocks or ETFs:</span> You can also indirectly invest in crypto through blockchain companies that specialize in the technology behind crypto and crypto transactions. Alternatively, you can buy stocks or ETFs of companies that use blockchain technology.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='pt-2 space-y-4'>
                    <div className='space-y-4'>
                        <h1 className='text-xl font-semibold text-gray-800'>How to store cryptocurrency</h1>
                        <p>
                            Once you have purchased cryptocurrency, you need to store it safely to protect it from hacks or theft. Usually, cryptocurrency is stored in crypto wallets, which are physical devices or online software used to store the private keys to your cryptocurrencies securely. Some exchanges provide wallet services, making it easy for you to store directly through the platform. However, not all exchanges or brokers automatically provide wallet services for you.
                        </p>
                        <p>
                            There are different wallet providers to choose from. The terms “hot wallet” and “cold wallet” are used:
                        </p>

                        <ul className=' list-disc pl-10 space-y-1'>
                            <li className='text-lg'>
                                <span className='font-semibold'>Hot wallet storage:</span> "hot wallets" refer to crypto storage that uses online software to protect the  private keys to your assets.
                            </li>
                            <li className='text-lg'>
                                <span className='font-semibold'>Cold wallet storage:</span> Unlike hot wallets, cold wallets (also known as hardware wallets) rely on offline electronic devices to securely store your private keys.
                            </li>
                        </ul>

                        <div className='pt-6 flex justify-center'>
                            <img className='w-full' src={require(`../assets/6.jpg`)} alt='' />
                        </div>
                    </div>
                </div>

                <div className='w-full pt-6 border-b border-gray-300'></div>

                <div className='pt-6 flex lg:flex-row flex-col lg:*:w-6/12 space-y-6 lg:space-y-0 lg:space-x-8'>
                    <div>
                        <img src={require(`../assets/7.png`)} alt=''/>
                    </div>
                    <div className=' space-y-4'>
                        <h1 className='font-semibold text-xl text-gray-700'>What can you buy with cryptocurrency?</h1>
                        <p className=''>
                            When it was first launched, Bitcoin was intended to be a medium for daily transactions, making it possible to buy everything from a cup of coffee to a computer or even big-ticket items like real estate. That hasn’t quite materialized and, while the number of institutions accepting cryptocurrencies is growing, large transactions involving it are rare. Even so, it is possible to buy a wide variety of products from e-commerce websites using crypto. Here are some examples:
                        </p>
                    </div>
                </div>

                <div className='*:space-y-3 space-y-5 pt-1 lg:pt-4'>
                    <div>
                        <h1 className='text-lg font-semibold'>Technology and e-commerce sites:</h1>
                        <p className=''>
                            Several companies that sell tech products accept crypto on their websites, such as newegg.com, AT&T, and Microsoft. Overstock, an e-commerce platform, was among the first sites to accept Bitcoin. Shopify, Rakuten, and Home Depot also accept it.
                        </p>
                    </div>  

                    <div>
                        <h1 className='text-lg font-semibold'>Luxury goods:</h1>
                        <p className=''>
                            Some luxury retailers accept crypto as a form of payment. For example, online luxury retailer Bitdials offers Rolex, Patek Philippe, and other high-end watches in return for Bitcoin.
                        </p>
                    </div>  

                    <div>
                        <h1 className='text-lg font-semibold'>Cars:</h1>
                        <p className=''>
                            Some car dealers – from mass-market brands to high-end luxury dealers – already accept cryptocurrency as payment.
                        </p>
                    </div>  

                    <div>
                        <h1 className='text-lg font-semibold'>Insurance:</h1>
                        <p className=''>
                            In April 2021, Swiss insurer AXA announced that it had begun accepting Bitcoin as a mode of payment for all its lines of insurance except life insurance (due to regulatory issues). Premier Shield Insurance, which sells home and auto insurance policies in the US, also accepts Bitcoin for premium payments.
                        </p>
                        <p>
                            If you want to spend cryptocurrency at a retailer that doesn’t accept it directly, you can use a cryptocurrency debit card, such as BitPay in the US.
                        </p>
                    </div>     
                </div>

                <div className='pt-7 space-y-8'>
                   <div className='flex flex-col lg:flex-row lg:items-center lg:*:w-6/12 space-y-6 lg:space-x-8'>
                        <div>
                           <img src={require('../assets/8.png')} alt=''/>
                        </div>
                        <div className=' space-y-4'>
                             <h1 className='font-semibold text-xl text-gray-700'>
                                 Is cryptocurrency safe?
                             </h1>
                             <p>
                                 Cryptocurrencies are usually built using blockchain technology. Blockchain describes the way transactions are recorded into "blocks" and time stamped. It's a fairly complex, technical process, but the result is a digital ledger of cryptocurrency transactions that's hard for hackers to tamper with.
                             </p>
                             <p>
                                 In addition, transactions require a two-factor authentication process. For instance, you might be asked to enter a username and password to start a transaction. Then, you might have to enter an authentication code sent via text to your personal cell phone.
                             </p>
                             <p>
                                 While securities are in place, that does not mean cryptocurrencies are un-hackable. Several high-dollar hacks have cost cryptocurrency start-ups heavily. Hackers hit Coincheck to the tune of $534 million and BitGrail for $195 million, making them two of the biggest cryptocurrency hacks of 2018.
                             </p>
                             <p className='block lg:hidden xl:block'>
                                  Unlike government-backed money, the value of virtual currencies is driven entirely by supply and demand. This can create wild swings that produce significant gains for investors or big losses. And cryptocurrency investments are subject to far less regulatory protection than traditional financial products like stocks, bonds, and mutual funds.
                             </p>
                        </div>
                   </div>
                   <p className='hidden lg:block xl:hidden'>
                        Unlike government-backed money, the value of virtual currencies is driven entirely by supply and demand. This can create wild swings that produce significant gains for investors or big losses. And cryptocurrency investments are subject to far less regulatory protection than traditional financial products like stocks, bonds, and mutual funds.
                   </p>
                </div>

                <div className='pt-1'></div>

                <div className='space-y-6 *:space-y-4'>
                    <div>
                        <h1 className='md:text-xl font-semibold bg-gray-100 py-6 px-4'>
                            Four tips to invest in cryptocurrency safely
                        </h1>
                        <p>
                            According to Consumer Reports, all investments carry risk, but some experts consider cryptocurrency to be one of the riskier investment choices out there. If you are planning to invest in cryptocurrencies, these tips can help you make educated choices.
                        </p>
                    </div>

                    <div>
                        <h1 className='font-semibold'>
                            Research exchanges:
                        </h1>
                        <p>
                                Before you invest, learn about cryptocurrency exchanges. It’s estimated that there are over 500 exchanges to choose from. Do your research, read reviews, and talk with more experienced investors before moving forward.
                        </p>
                    </div>
                    
                    <div>
                        <h1 className='font-semibold'>
                            Know how to store your digital currency:
                        </h1>
                        <p>
                            If you buy cryptocurrency, you have to store it. You can keep it on an exchange or in a digital wallet. While there are different kinds of wallets, each has its benefits, technical requirements, and security. As with exchanges, you should investigate your storage choices before investing.
                        </p>
                    </div>

                    <div>
                        <h1 className='font-semibold'>
                            Diversify your investments:
                        </h1>
                        <p>
                            Diversification is key to any good investment strategy, and this holds true when you are investing in cryptocurrency. Don't put all your money in Bitcoin, for example, just because that's the name you know. There are thousands of options, and it's better to spread your investment across several currencies.
                        </p>
                    </div>

                    <div>
                        <h1 className='font-semibold'>
                            Prepare for volatility:
                        </h1>

                        <p>
                            The cryptocurrency market is highly volatile, so be prepared for ups and downs. You will see dramatic swings in prices. If your investment portfolio or mental wellbeing can't handle that, cryptocurrency might not be a wise choice for you.
                        </p>

                        <p>
                            Cryptocurrency is all the rage right now, but remember, it is still in its relative infancy and is considered highly speculative. Investing in something new comes with challenges, so be prepared. If you plan to participate, do your research, and invest conservatively to start.
                        </p>

                        <p>
                            One of the best ways you can stay safe online is by using a comprehensive antivirus. Kaspersky Internet Security defends you from malware infections, spyware, data theft and protects your online payments using bank-grade encryption.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChildsHome2