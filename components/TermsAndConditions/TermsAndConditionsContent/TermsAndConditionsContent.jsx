import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TermsConditionsStyle from './TermsAndConditionsContent.module.css'

const TermsAndConditionsContent = (props) => {
  return(
    <>
      <Container fluid className={TermsConditionsStyle.top_banner}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <h1>Terms and Conditions</h1>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <div className={TermsConditionsStyle.content_outer}>
              <h2>MARRA FORNI TERMS AND CONDITIONS OF SALES</h2>

              <h3>Terms and Conditions Mandatory</h3>
              <p>The sale of products shown on the face of this Purchase Order (Order”) and of all other products (the “Products”) ordered by or sold to Customer by Euro Restaurant Solutions d/b/a Marra Forni (‘ERS”) is expressly governed in all respects by these Terms and Conditions. Customer’s submission of an Order to ERS and Customer’s later acceptance of delivery of, payment for, use or resale of any of the Products constitutes each Customer’s irrevocable and unconditional agreement to be bound by these Terms and Conditions. These Terms and Conditions supersede all oral or written promises, representations and other statements or undertakings by ERS not expressly set forth contained herein, and Customer disclaims reliance on any of same. ERS shall not be bound by any term, condition or other undertaking or obligation unless expressly contained in these Terms and Conditions. ERS’s acceptance of any order is expressly made conditional on Customer’s assent to all of the provisions contained in these Terms and Conditions. These Terms and Conditions may not be modified orally.</p>

              <h3>Prices and Credit Terms</h3>
              <p>The purchase price and payment terms for the Products shall be in all cases as set forth on the face of this Order, subject only to such written modifications if any as ERS may assent to in a modified Order signed by the president of ERS and delivered to Customer prior to shipment of the Products ordered. ERS’s acceptance of any Order from Customer is subject to credit approval of Customer by ERS in writing. ERS does not accept payment by credit card. For Customers whose credit is approved by ERS in writing, ERS may refer Customer to an authorized leasing company which may offer Customer lease-to- purchase terms for acquisition of Products. In any instance when Customer desires to finance the purchase of any of the Products shown on an Order either by a third-party loan to Customer or third-party equipment lease, Customer shall nevertheless remain contractually responsible to perform each of these Terms and Conditions, including without limitation, its obligations to timely and fully pay for the Products shown on the Order, arrange shipment of same to Customer within 14 days completion of manufacture and accept delivery of same, whether or not Customer succeeds in entering into a loan or equipment lease agreement to finance the purchase of same. In all cases involving loan or equipment lease financing, Customer shall deliver to ERS within 7 days after the date of the Order true copies of: (a) in the case of a third-party loan, the applicable loan agreement signed by lender and Customer and providing that proceeds of the loan in the full amount of the purchase price shown on the Order shall be timely paid over to ERS, and (b) in the case of a third-party equipment lease, the applicable equipment lease agreement signed by the equipment lessor and Customer and providing that lessor has assumed Customer’s obligations under the Order and shall timely pay to ERS the full purchase price of the Products shown on the Order.</p>

              <h3>Nonpayment</h3>
              <p>In any case when Customer (or its lender or equipment lessor) fails to make full payment of the purchase price of the Products shown on the Order on or before the date(s) when due date, then Customer (and its leander or equipment lessor) shall pay to ERS, in addition to the full invoiced amounts on the invoices involved: (a) accrued interest on the unpaid balanced at the rate of 1.5% per month from the due date to the date of payment in full, and (b) ERS’s costs of collection, including without limitation attorneys’ fees of not less than 15% of the unpaid balance of this and all other unpaid Orders or overdue invoices, plus accrued interest on all unpaid balances.</p>

              <h3>Delivery</h3>
              <p>All sales shall be F.O.B. ERS’s premises unless expressly stated otherwise on the face of this Order. Method and route of shipment are at ERS’s discretion, unless Customer provides advance written instructions, and such instructions are accepted by ERS in writing. All shipments are insured at the Customer’s expense and are made at the Customer’s risk. In case of shipment arranged by ERS through any carrier, all shipping costs of will be charged to and paid by Customer prior to shipment. If the shipment of any Product to Customer is delayed or deferred by Customer for any reason for a period of 14 days after the date when ERS notifies Customer of the completion of manufacture, Customer shall pay ERS, in addition to the purchase price, storage charges at the rate of 10% of the purchase price of the applicable Product(s) per month. If any monthly storage charge remains unpaid by Customer by the 10th day of the month involved, or if Customer for any reason delays or defers shipment for a period of 3 months or more, ERS may in its discretion thereafter cancel the sale and retain, as liquidated damages, any amounts paid by or on behalf of Customer for the Products involved, without further recourse against ERS or further obligation of ERS to Customer</p>

              <h3>Delays</h3>
              <p>In no event will ERS be liable for any delay in the execution of Orders, or in the delivery or shipment of Products, or for any damages (including special, consequential and incidental damages) suffered by the Customer by reason of such delay, when such delay is, directly or indirectly, caused by, or in any manner arises in whole or part from, fires, floods, earthquakes, accidents, civil unrest, act of God, war, governmental interference or embargoes, strikes, labor difficulties, shortage of labor, fuel, power, materials, or supplies, transportation delays, traffic congestion, equipment malfunction or any other cause or causes (whether or not similar in nature to any of these hereinbefore specified) beyond ERS’s control or caused by others.</p>

              <h3>Security Interest</h3>
              <p>ERS shall retain a security interest in all Products sold to Customer until Customer has made or caused to be made full payment for same to ERS. Customer’s signature on this Order shall constitute Customer’s irrevocable authorization to ERS to execute and file in Customer’s name such UCC-1 forms and other documents as may be requisite to create and perfect ERS’s security interest in the Products covered by the Order.</p>

              <h3>ERS Right of Possession</h3>
              <p>ERS shall have the additional right, for credit reasons or because of the Customer’s default or anticipated default, to withhold shipments, in whole or in part, and to recall Products in transit, retake same, and repossess all Products which may be stored with ERS for the Customer’s account, without the necessity of initiating any proceedings to effect same, and Customer consents that all Products so recalled, retaken or repossessed shall become the absolute property of ERS, provided that Customer is given credit therefor equal to the amount realized by ERS on public or private re-sale in ERS’s discretion. The foregoing shall not be construed as limiting, in any manner, any other rights or remedies available to ERS.</p>

              <h3>Taxes</h3>
              <p>Prices specified for the Products are exclusive of all excise taxes of other taxes or charges which ERS may be required to pay to any government (national, state or local) upon, or measured by, the production, sale, transportation, delivery or use of the Products or any similar taxes or charges (“Taxes”). Customer shall immediately on request advance to ERS or reimburse ERS for all Taxes.</p>

              <h3>Disclaimer of Warranties</h3>
              <p>ERS warrants that the Products covered by this Order are of the type, kind and quantity described in this Order and were in good and working order at the time entrusted to the carrier transporting same to Customer’s designated delivery address.</p>
              <p><b>THE WARRANTY PROVIDED IN THIS PARAGRAPH AND THE OBLIGATIONS AND LIABILITIES OF ERS HEREUNDER ARE EXCLUSIVE AND IN LIEU OF, AND PURCHASER HEREBY WAIVES AND DISCLAIMS, ALL OTHER REMEDIES, W ARRANTIES, GUARANTIES OR LIABILITIES, EXPRESS OR IMPLIED, ARISING BY LAW OR OTHERWISE (INCLUDING BUT NOT LIMITED TO THE WARRANTY OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND THE WARRANTLY AGAINST INFRINGEMENT), WHETHER OR NOT OCCASIONED BY ERS’S NEGLIGENCE. THIS LIMITED WARRANTY SHALL NOT BE EXTENDED, ALTERED OR VARIED EXCEPT BY A WRITTEN INSTRUMENT SIGNED BY BOTH ERS AND CUSTOMER. TO THE EXTENT A PRODUCT MANUFACTURED BY A THIRD-PART IS SOLD UNDER THIS ORDER, CUSTOMER SHALL LOOK SOLELY TO SUCH MANUFACTURER FOR ANY WARRANTIES AND OTHER REMEDIES.</b></p>

              <h3>Claims</h3>
              <p>Customer shall inspect all Products immediately upon receipt. All claims, whether for defective or non-conforming Products, shortages, delays, or failures in shipment or delivery, or for any other cause, shall be deemed fully waived and released by Customer, unless made in writing and delivered to ERS within 24 hours after delivery, stating full particulars in support of Customer’s claim and providing photographic evidence supporting Customer’s claim, in which event, Customer shall fully cooperate with ERS’s instructions to Customer in connection therewith. Upon timely receipt of such written notice, and upon return to ERS of the Products involved, ERS will at its option replace or repair the Products or adjust the invoice involved, provided however:</p>
              <p><b>THE PARTIES AGREE THAT CUSTOMER MAY NOT RECOVER FROM ERS UNDER ANY LEGAL THEORY, AND UNDER NO CIRCUMSTANCES SHALL ERS BE LIABLE TO THE CUSTOMER OR TO ANY THIRD PARTY WITH WHOM CUSTOMER DEALS FOR, ANY SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES, LOSSES, OR EXPENSES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR INJURY TO PERSON, PROPERTY OR EQUIPMENT, LOSS OF PROFITS OR REVENUE, COST OF CAPITAL, COST OF PURCHASED OR REPLACEMENT PRODUCTS, OR CLAIMS OF CUSTOMERS, NOR SHALL ERS BE LIABLE IN ANY CASE FOR ANY AMOUNT IN EXCESS OF THE PRICE ACTUALLY PAID BY CUSTOMER TO ERS FOR THE PRODCUTS IN QUESTION. EXCEPT AS EXPRESSLY PROVIDED IN THE PRECEDING SENTENCE, ALL SALES ARE FINAL. ANY ACTION BY CUSTOMER AGAINST ERS FOR BREACH, INCLUDING WITHOUT LIMITATION BREACH OF CONTRACT OR WARRANTY, EXPRESS OR IMPLIED, INCLUDING THE WARRANTY OF MERCHANTABILITY MUST BE COMMENCED WITHIN ONE YEAR AFTER THE DATE OF DELIVERY OF THE PRODCUTS INVOLVED. CUSTOMER WAIVES TRIAL BY JURY AS TO ITS CLAIMS.</b></p>

              <h3>Customer’s Obligations</h3>
              <p>Upon delivery of the Products to shipper, Customer assumes all obligations for compliance with all applicable federal, state and local laws, rules, regulations and standards applicable to same, including but not limited to, those regarding the transportation, operation, maintenance, use, storage, disposal and resale of same. Customer shall hold ERS harmless and on demand shall defend, indemnify and immediately reimburse ERS for and against any claims, suits, actions, investigations or other liabilities or expenses in any way arising out of or owing to Customer’s failure to comply with its obligations set forth in the Order or these Terms and Conditions or under an applicable laws, rules or regulations, the claims of Customer’s vendees or customers, the Products or Customer’s use or operation of same or any action or omission of Customer.</p>

              <h3>Limited Right of Order Cancellation</h3>
              <p>Customer shall pay 50% of the Purchase Price of the Products shown on the Order within 7 days after the date when the Order is transmitted to ERS (the “Order Date”), and the remaining 50% within 14 days after ERS’s notice that manufacture of the Products has been completed (the “Manufacture Completion Date”). Customer may cancel the Order by transmitting to ERS within 7 days after the Order Date a written notice signed by Customer stating that the Order is cancelled and specifying the Product(s) as to which the cancellation applies. Other than the foregoing, Customer shall have no other right to cancel an Order as to any Product and any such other cancellation rights are hereby irrevocably waived. In the event of a cancellation notice timely transmitted to ERS in accordance with the foregoing, ERS will refund to Customer (or its lender or equipment lessor, as the case may be) the amount paid by Customer (or its lender or equipment lessor) for the Product(s) specified in the cancellation notice as cancelled. No other refunds or payments are due from ERS under any circumstance.</p>

              <h3>Entire Agreement</h3>
              <p>This document embodies the entire agreement between the parties relating to this and all past and future Product sales. All prior agreements, whether oral or written, are merged into this document. If not expressly contained in this document, Customer expressly disclaims reliance upon any statements or representations, whether oral or written, which may have been made by Euro, its agents or employees concerning the Products or other any subject hereof.</p>

              <h3>Blue-Pencil Clause</h3>
              <p>If for any reason a provision of this Order or these Terms and Conditions shall be determined by a court to be legally invalid or unenforceable to any extent, the validity of the remainder of this agreement shall not be affected, and such provisions shall be deemed modified to the minimum extent necessary to make such provision consistent with applicable law and, in such modified form, such provisions shall be fully enforceable and enforced.</p>

              <h3>Choice of Law and Forum </h3>
              <p>This Order and Terms and Conditions, and the agreements and purchases of Products arising from same and all claims arising form or relating to any of same, shall in all respects be governed by and construed and decided in accordance with the laws of the State of Maryland without regard to its conflicts of law principles. No action or proceedings relating in whole or part to this Order, these Terms and Conditions or the Products may be brought in any forum other than a court located in the State of Maryland and County of Prince George’s. Each party consents to the exclusive jurisdiction and venue of such a court and to service of process by first class mail.</p>

              <p>Last Updated: This Terms and Conditions was last updated on December 2016.</p>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
   )
  }


export default TermsAndConditionsContent