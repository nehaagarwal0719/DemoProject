pragma solidity ^0.5.1;
contract freelancer{

   // enum Status {NOT_AVAILABLE,FOR_SELL,FOR_RENT}

    struct property{
        uint id;
        uint bno;
        string name;
        string des;
        string type1;
        address payable owner;
        string status;
        bool purchased;
    }
    
    struct bid{
        uint checkid;
        uint bid_id;
        string name;
        string message;
        uint price;
        address payable bidder;
        bool status;
    }
   struct ledger{
        uint id;
        uint p_id;
        address payable new_owner;
    }

    
    uint public propertyCount=0;
    uint public bidCount=0;
    uint public linkCount=0;
    uint public ledgerCount=0;

    mapping (uint=>property) public props;
    mapping (uint=>bid) public bids;
    mapping (uint=>bid) public links;
    mapping (uint=>ledger) public ledgers;
     
    
    event propertyCreated(
        uint id,
        uint bno,
        string name,
        string des,
        string type1,
        address payable owner,
        string status,
        bool purchased
    );

    event bidCreated(
        uint checkid,
        uint bid_id,
        string name,
        string message,
        uint price,
        address payable bidder,
        bool status

        );
    event bidPurchased(
        uint bid_id,
        string name,
        string message,
        uint price,
        address payable bidder
        );

    event Sale(
        uint id,
        string name,
        string des,
        string type1,
        address payable owner,
        string status,
        bool purchased

    );

    event Rent(
        uint id,
        string name,
        string des,
        string type1,
        address payable owner,
        string status,
        bool purchased

    );

    event Approved(
        uint checkid,
        uint bid_id,
        string name,
        string message,
        uint price,
        address payable bidder,
        bool status
    );
    
      event ledgerCreated(
        uint id,
        uint p_id,
        address payable new_owner
    );
  //  address public constant owner= '0xc55961b8ead792670e5393418950be7597d521ed';

    function createProperty(uint _bno,string memory _name,string memory _des,address payable _owner,string memory _type)public{
        //require(msg.sender == owner);
        props[propertyCount]=property(propertyCount,_bno,_name,_des,_type,_owner,"NOT AVAILABLE",false);
        propertyCount++;
         ledgers[ledgerCount]=ledger(ledgerCount,propertyCount,_owner);
        ledgerCount++;
         emit ledgerCreated(ledgerCount,propertyCount,_owner);
        emit propertyCreated(propertyCount,_bno,_name,_des,_type,_owner,"NOT AVAILABLE",false);
    }

    function forSale(uint _id)public payable{
       // require(props[_id].owner==msg.sender);
        props[_id].status="SALE";
        emit Sale(propertyCount,props[_id].name,props[_id].des,props[_id].type1,props[_id].owner,props[_id].status,props[_id].purchased);
    }

    function forRent(uint _id)public payable{
       // require(props[_id].owner==msg.sender);
        props[_id].status="RENT";
        emit Sale(propertyCount,props[_id].name,props[_id].des,props[_id].type1,props[_id].owner,props[_id].status,props[_id].purchased);
    }

    function forApprove(uint _id) public payable{

        bids[_id].status=true;
        emit Approved(bids[_id].checkid,bidCount,bids[_id].name,bids[_id].message,bids[_id].price,bids[_id].bidder,bids[_id].status);
    }


    function createBid( uint _checkid,string memory _name, string memory _message, uint _price) public{
        bids[bidCount]=bid(_checkid,bidCount,_name,_message,_price, msg.sender,false);
        bidCount++;
        //links[_checkid]=bid(bidCount,_name,_message,_time,_price, msg.sender);
        //linkCount++;
        emit bidCreated(_checkid,bidCount,_name,_message,_price, msg.sender,false);
        
    }

     function purchaseBid(uint _id) public payable  {
        //fetch the bid
        bid memory _bid = bids[_id];
        //fetch the owner 
        address payable _buyer =_bid.bidder;
       // address payable _seller =_bid.bidder;
        // Make sure the product id is valid
        require (_bid.bid_id >0 && _bid.bid_id< bidCount);
        // enough ether
        require (msg.value >= _bid.price);
         //fetch the work
         uint  property_id =_bid.checkid;

         property memory _property = props[property_id];

         address payable _seller= _property.owner;
         //work is not purchased
         require (!_property.purchased);

         //seller is not buyer
         //require (_seller!=msg.sender);
         
         
        //transfer ownership to the buyer
         _bid.bidder= msg.sender;
         //mark as purchased
        _property.purchased = true;
        _property.status="NOT AVAILABLE";
         //update the product
         bids[_id]=_bid;
         props[property_id]=_property;
         //pay the seller through ether
         address(_seller).transfer(msg.value);
         //trigger an event
         ledgers[ledgerCount]=ledger(ledgerCount,property_id,_seller);
         ledgerCount ++;
         emit ledgerCreated(ledgerCount,property_id,_seller);
         emit bidPurchased(bidCount,_bid.name,_bid.message,_bid.price, msg.sender);

    }    

}