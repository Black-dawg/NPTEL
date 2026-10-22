// NPTEL Ethical Hacking - Assignments Week 1 to 12 Question Bank
window.QUIZ_DATA = [
  {
    "id": "w1_q1",
    "week": 1,
    "qIndex": 1,
    "type": "msq",
    "question": "Which of the following belong to the CIA Triad in information security?",
    "options": [
      {
        "key": "a",
        "text": "Confidentiality"
      },
      {
        "key": "b",
        "text": "Authentication"
      },
      {
        "key": "c",
        "text": "Availability"
      },
      {
        "key": "d",
        "text": "Accountability"
      },
      {
        "key": "e",
        "text": "Integrity"
      },
      {
        "key": "f",
        "text": "Authorization"
      }
    ],
    "correctAnswerRaw": "a, c, e",
    "correctKeys": [
      "a",
      "c",
      "e"
    ],
    "explanation": "The CIA Triad consists of Confidentiality, Integrity, and Availability. Authentication, non-repudiation, accountability, and authorization are important security concepts but are not part of the core CIA Triad. Thus, the correct options are (a), (c), and (e)."
  },
  {
    "id": "w1_q2",
    "week": 1,
    "qIndex": 2,
    "type": "mcq",
    "question": "Which of the following penetration testing models provides the tester with no prior information about the target network?",
    "options": [
      {
        "key": "a",
        "text": "White box model"
      },
      {
        "key": "b",
        "text": "Black box model"
      },
      {
        "key": "c",
        "text": "Gray box model"
      },
      {
        "key": "d",
        "text": "Blue box model"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "In the white box model, the tester has complete information about the network. In the black box model, the tester has no information about the network. The grey box model provides partial information. There is no standard model called the blue box model. Thus, the correct option is (b)."
  },
  {
    "id": "w1_q3",
    "week": 1,
    "qIndex": 3,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true for packet-switched networks?",
    "options": [
      {
        "key": "a",
        "text": "Bandwidth is dedicated for the entire duration of a session."
      },
      {
        "key": "b",
        "text": "Multiple connections can share the same communication link."
      },
      {
        "key": "c",
        "text": "Delay is always constant regardless of network load."
      },
      {
        "key": "d",
        "text": "It requires end-to-end circuit setup before data transfer."
      },
      {
        "key": "e",
        "text": "Data is divided into smaller packets before transmission."
      },
      {
        "key": "f",
        "text": "It guarantees zero packet loss under all conditions."
      }
    ],
    "correctAnswerRaw": "b, e",
    "correctKeys": [
      "b",
      "e"
    ],
    "explanation": "In packet switching, communication links may be shared by more than one connection, and data is broken into smaller packets before transmission. Dedicated bandwidth and constant delay are characteristics of circuit switching. Packet switching does not require prior circuit setup, and it does not guarantee zero packet loss. Thus, the correct options are (b) and (e)."
  },
  {
    "id": "w1_q4",
    "week": 1,
    "qIndex": 4,
    "type": "mcq",
    "question": "Which OSI layer is primarily responsible for framing, MAC addressing, and error detection over a physical link?",
    "options": [
      {
        "key": "a",
        "text": "Physical layer"
      },
      {
        "key": "b",
        "text": "Data link layer"
      },
      {
        "key": "c",
        "text": "Network layer"
      },
      {
        "key": "d",
        "text": "Transport layer"
      },
      {
        "key": "e",
        "text": "Session layer"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "The data link layer organizes bits into frames, provides MAC addressing, and performs error detection over a point-to-point or shared link. The physical layer deals with raw bit transmission, and the network layer handles routing and logical addressing.\n\nThus, the correct option is (b)."
  },
  {
    "id": "w1_q5",
    "week": 1,
    "qIndex": 5,
    "type": "numerical",
    "question": "A 1500-byte packet is sent over a 100 Kbps point-to-point link whose propagation delay is 8\nmsec. The packet will reach the destination after ________ msec. (Assume 1K = 1000)",
    "options": [],
    "correctAnswerRaw": "120 to 130",
    "correctKeys": [
      "120 to 130"
    ],
    "explanation": "Transmission rate = 100,000 bits per second.\n1500 bytes = 12,000 bits.\nTransmission time = 12,000 / 100,000 = 0.12 sec = 120 msec.\nTotal time = 120 + 8 = 128 msec."
  },
  {
    "id": "w1_q6",
    "week": 1,
    "qIndex": 6,
    "type": "mcq",
    "question": "What is the primary purpose of an IP address in a network?",
    "options": [
      {
        "key": "a",
        "text": "It identifies the physical hardware manufacturer of a device."
      },
      {
        "key": "b",
        "text": "It uniquely identifies a host or interface on a network."
      },
      {
        "key": "c",
        "text": "It specifies the number of open ports on a system."
      },
      {
        "key": "d",
        "text": "It determines the encryption algorithm used by a host."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "An IP address is a logical address that uniquely identifies a host or a specific network interface, enabling routing of packets to the correct destination. It is unrelated to hardware manufacturer identification, open ports, or encryption. Thus, the correct option is (b)."
  },
  {
    "id": "w1_q7",
    "week": 1,
    "qIndex": 7,
    "type": "numerical",
    "question": "__________ is the minimum size (in bytes) of a TCP header without options.",
    "options": [],
    "correctAnswerRaw": "20",
    "correctKeys": [
      "20"
    ],
    "explanation": "The minimum size of a TCP header is 20 bytes when no options are used. Additional options can increase this size up to 60 bytes. Thus, the correct answer is 20."
  },
  {
    "id": "w1_q8",
    "week": 1,
    "qIndex": 8,
    "type": "mcq",
    "question": "Which IP header field is decremented at every router hop and is primarily used to prevent packets from looping indefinitely in a network?",
    "options": [
      {
        "key": "a",
        "text": "Header checksum"
      },
      {
        "key": "b",
        "text": "Fragment offset"
      },
      {
        "key": "c",
        "text": "Time to Live (TTL)"
      },
      {
        "key": "d",
        "text": "HLEN"
      },
      {
        "key": "e",
        "text": "Identification"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "The Time to Live (TTL) field is decremented by 1 at every router hop. When it reaches 0, the packet is discarded, preventing it from looping indefinitely in the network. Header checksum is used for error detection, fragment offset and identification are used for reassembly, and HLEN indicates header length. Thus, the correct option is (c)."
  },
  {
    "id": "w1_q9",
    "week": 1,
    "qIndex": 9,
    "type": "numerical",
    "question": "If the IP header is 224 bits long, what will be the value (in decimal) of the HLEN field?",
    "options": [],
    "correctAnswerRaw": "7",
    "correctKeys": [
      "7"
    ],
    "explanation": "HLEN represents the header length in multiples of 32 bits (4 bytes).\nThus, 224 bits = 7 x 32 bits. Hence HLEN = 7.\nThus the correct answer is 7."
  },
  {
    "id": "w1_q10",
    "week": 1,
    "qIndex": 10,
    "type": "numerical",
    "question": "__________bits are used to represent a MAC address.",
    "options": [],
    "correctAnswerRaw": "48",
    "correctKeys": [
      "48"
    ],
    "explanation": "A MAC address (data link layer / hardware address) is 48 bits long, typically represented as 12 hexadecimal digits. Thus, the correct answer is 48."
  },
  {
    "id": "w2_q1",
    "week": 2,
    "qIndex": 1,
    "type": "numerical",
    "question": "An IP packet arrives with the first eight bits as 0100 0101. How many bytes are there in the OPTIONS field?",
    "options": [],
    "correctAnswerRaw": "0",
    "correctKeys": [
      "0"
    ],
    "explanation": "First four bits (0100) = version 4. Next four bits (0101 = 5) = header length.\nHeader length = 5 x 4 = 20 bytes, which is the minimum IP header size with no options.\nThus the OPTIONS field size = 20 - 20 = 0 bytes."
  },
  {
    "id": "w2_q2",
    "week": 2,
    "qIndex": 2,
    "type": "msq",
    "question": "Which of the following is/are true for TCP header flag bits?",
    "options": [
      {
        "key": "a",
        "text": "SYN=1, ACK=0 indicates a connection request."
      },
      {
        "key": "b",
        "text": "SYN=1, ACK=1 indicates connection confirmation."
      },
      {
        "key": "c",
        "text": "FIN flag is used to reject a connection."
      },
      {
        "key": "d",
        "text": "RST flag is used to gracefully terminate a connection."
      },
      {
        "key": "e",
        "text": "URG flag indicates urgent data in the segment."
      }
    ],
    "correctAnswerRaw": "a, b, e",
    "correctKeys": [
      "a",
      "b",
      "e"
    ],
    "explanation": "SYN=1, ACK=0 is a connection request; SYN=1, ACK=1 is connection\nconfirmation; URG flag indicates urgent data. FIN is used for graceful connection termination\n(not rejection), and RST is used to abruptly reset/reject a connection (not graceful termination).\nThus, the correct options are (a), (b), and (e)."
  },
  {
    "id": "w2_q3",
    "week": 2,
    "qIndex": 3,
    "type": "msq",
    "question": "Which of the following represents a valid broadcast address for its respective subnet (as specified)?",
    "options": [
      {
        "key": "a",
        "text": "10.255.255.255 for network 10.0.0.0/8"
      },
      {
        "key": "b",
        "text": "10.20.0.0 for network 10.20.0.0/16"
      },
      {
        "key": "c",
        "text": "192.168.5.255 for network 192.168.5.0/24"
      },
      {
        "key": "d",
        "text": "172.16.255.0 for network 172.16.0.0/16"
      },
      {
        "key": "e",
        "text": "192.168.5.0 for network 192.168.5.0/24"
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "For 10.0.0.0/8, the host portion is 24 bits, so broadcast  address =\n10.255.255.255 (all host bits set to 1). For 192.168.5.0/24, the host portion is 8 bits, so\nbroadcast address = 192.168.5.255. Option (b) is the network address, not broadcast. Option\n(d) is incorrect since for /16, broadcast address should be 172.16.255.255, not 172.16.255.0.\nOption (e) is the network address, not a broadcast address.\nThus, the correct options are (a) and (c)."
  },
  {
    "id": "w2_q4",
    "week": 2,
    "qIndex": 4,
    "type": "mcq",
    "question": "An IP packet arrives at the final destination with D flag = 0, M flag = 0, and offset = 5. Which of\nthe following is true?",
    "options": [
      {
        "key": "a",
        "text": "The packet has not been fragmented."
      },
      {
        "key": "b",
        "text": "The packet is the first fragment."
      },
      {
        "key": "c",
        "text": "The packet is the last fragment of a fragmented packet."
      },
      {
        "key": "d",
        "text": "The packet will be dropped due to invalid flags"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "M = 0 indicates no more fragments follow, meaning this is the last fragment. A\nnon-zero offset (5) confirms fragmentation has occurred, ruling out option (a). Hence, it is the\nlast fragment of a fragmented packet.\nThus, the correct option is (c)."
  },
  {
    "id": "w2_q5",
    "week": 2,
    "qIndex": 5,
    "type": "msq",
    "question": "Which of the following IP address ranges are reserved for private use?",
    "options": [
      {
        "key": "a",
        "text": "10.0.0.0 to 10.255.255.255"
      },
      {
        "key": "b",
        "text": "100.64.0.0 to 100.127.255.255"
      },
      {
        "key": "c",
        "text": "172.16.0.0 to 172.31.255.255"
      },
      {
        "key": "d",
        "text": "192.168.0.0 to 192.168.255.255"
      },
      {
        "key": "e",
        "text": "169.254.0.0 to 169.254.255.255"
      },
      {
        "key": "f",
        "text": "224.0.0.0 to 239.255.255.255"
      }
    ],
    "correctAnswerRaw": "a, c, d",
    "correctKeys": [
      "a",
      "c",
      "d"
    ],
    "explanation": "The private IP ranges as per RFC 1918 are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. 169.254.x.x is reserved for link-local addressing (APIPA), 100.64 to 100.127 is for CGNET, and 224.0.0.0 to 239.255.255.255 is the Class D multicast range. Thus, the correct options are (a), (c), and (d)."
  },
  {
    "id": "w2_q6",
    "week": 2,
    "qIndex": 6,
    "type": "msq",
    "question": "Which of the following well-known port number(s) is/are correctly matched with their corresponding service?",
    "options": [
      {
        "key": "a",
        "text": "HTTP - 80"
      },
      {
        "key": "b",
        "text": "FTP - 21"
      },
      {
        "key": "c",
        "text": "SSH - 25"
      },
      {
        "key": "d",
        "text": "DNS - 23"
      },
      {
        "key": "e",
        "text": "Telnet - 53"
      },
      {
        "key": "f",
        "text": "SMTP - 22"
      }
    ],
    "correctAnswerRaw": "a, b",
    "correctKeys": [
      "a",
      "b"
    ],
    "explanation": "HTTP uses port 80, FTP uses port 21, DNS uses port 53, and Telnet uses port 23, SSH uses port 22, and SMTP uses port 25. Thus the correct options are (a) and (b)."
  },
  {
    "id": "w2_q7",
    "week": 2,
    "qIndex": 7,
    "type": "mcq",
    "question": "What is the subnet mask corresponding to CIDR notation /26?",
    "options": [
      {
        "key": "a",
        "text": "255.255.255.0"
      },
      {
        "key": "b",
        "text": "255.255.255.128"
      },
      {
        "key": "c",
        "text": "255.255.255.192"
      },
      {
        "key": "d",
        "text": "255.255.255.224"
      },
      {
        "key": "e",
        "text": "255.255.255.240"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "/26 means 26 network bits, leaving 6 host bits. The last octet becomes\n11000000 = 192. So the subnet mask is 255.255.255.192.\nThus the correct option is (c)."
  },
  {
    "id": "w2_q8",
    "week": 2,
    "qIndex": 8,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true about IPv4 fragmentation and the \"Don't Fragment\" (DF) bit?",
    "options": [
      {
        "key": "a",
        "text": "If DF = 1 and packet size exceeds MTU, the packet is dropped and an error is generated."
      },
      {
        "key": "b",
        "text": "If DF = 1, the router fragments the packet regardless of size."
      },
      {
        "key": "c",
        "text": "If DF = 0, fragmentation is allowed if necessary."
      },
      {
        "key": "d",
        "text": "DF bit is part of the Fragment Offset field."
      },
      {
        "key": "e",
        "text": "DF = 1 guarantees the packet will always reach its destination."
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "If DF = 1 and the packet exceeds the outgoing MTU, the router drops the\npacket and typically sends an ICMP \"Fragmentation Needed\" error. If DF = 0, fragmentation is\npermitted when required. DF is part of the Flags field, not Fragment Offset, and setting DF=1\ndoes not guarantee delivery.\nThus the correct options are (a) and (c)."
  },
  {
    "id": "w2_q9",
    "week": 2,
    "qIndex": 9,
    "type": "numerical",
    "question": "An IP packet has HLEN = 12 and TOTAL LENGTH = 900 bytes. The number of data bytes in the\npacket will be ________.",
    "options": [],
    "correctAnswerRaw": "852",
    "correctKeys": [
      "852"
    ],
    "explanation": "HLEN = 12 means header size = 12 x 4 = 48 bytes. Data bytes = 900 - 48 = 852\nbytes.\nThus the correct answer is 852."
  },
  {
    "id": "w2_q10",
    "week": 2,
    "qIndex": 10,
    "type": "numerical",
    "question": "__________ is the size (in bytes) of a UDP header.",
    "options": [],
    "correctAnswerRaw": "8",
    "correctKeys": [
      "8"
    ],
    "explanation": "The UDP header has 4 fields (source port, destination port, length, checksum), each of 2 bytes, totaling 8 bytes. Thus, the correct answer is 8."
  },
  {
    "id": "w3_q1",
    "week": 3,
    "qIndex": 1,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true regarding connectionless routing used by the IP protocol?",
    "options": [
      {
        "key": "a",
        "text": "Each packet is treated as an independent unit for routing decisions."
      },
      {
        "key": "b",
        "text": "A fixed path is established before any packet is transmitted."
      },
      {
        "key": "c",
        "text": "Different packets between the same source and destination may follow different paths."
      },
      {
        "key": "d",
        "text": "IP protocol uses connection-oriented routing."
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "IP uses connectionless routing, where each packet is treated independently and may follow a different path even between the same source-destination pair. IP does not establish a fixed path beforehand (that is connection-oriented behavior). Thus, the correct options are (a) and (c)."
  },
  {
    "id": "w3_q2",
    "week": 3,
    "qIndex": 2,
    "type": "mcq",
    "question": "Which of the following statement(s) is/are false regarding direct and indirect packet delivery?",
    "options": [
      {
        "key": "a",
        "text": "Direct delivery occurs when the destination host and deliverer are on the same physical network."
      },
      {
        "key": "b",
        "text": "Indirect delivery occurs when the destination host is not on the same network as the deliverer."
      },
      {
        "key": "c",
        "text": "In direct delivery, packets always pass through at least one router."
      },
      {
        "key": "d",
        "text": "In indirect delivery, the packet is routed hop by hop until it reaches a router on the destination's network."
      },
      {
        "key": "e",
        "text": "Direct delivery can occur between the last router and the destination host."
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Direct delivery occurs when source and destination share the same physical network, or between the last router and the destination host - hence it does NOT always require passing through a router, making (c) false. All other statements correctly describe direct/indirect delivery. Thus, the correct (false) option is (c)."
  },
  {
    "id": "w3_q3",
    "week": 3,
    "qIndex": 3,
    "type": "mcq",
    "question": "Which routing table flag indicates that a route is specific to a single host rather than an entire network?",
    "options": [
      {
        "key": "a",
        "text": "U"
      },
      {
        "key": "b",
        "text": "G"
      },
      {
        "key": "c",
        "text": "H"
      },
      {
        "key": "d",
        "text": "D"
      },
      {
        "key": "e",
        "text": "M"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "The H flag in a routing table entry indicates that the route is host-specific (a route to a single host), as opposed to a route to an entire network. Thus the correct option is (c)."
  },
  {
    "id": "w3_q4",
    "week": 3,
    "qIndex": 4,
    "type": "mcq",
    "question": "In the OSPF routing protocol, which type of packet is used to determine whether a neighboring router is active?",
    "options": [
      {
        "key": "a",
        "text": "Link State Update"
      },
      {
        "key": "b",
        "text": "Link State Request"
      },
      {
        "key": "c",
        "text": "Hello packet"
      },
      {
        "key": "d",
        "text": "Link State Acknowledgement"
      },
      {
        "key": "e",
        "text": "TCP SYN packet"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "OSPF uses \"Hello\" packets periodically exchanged between neighbouring routers to check whether a neighbour is alive/active. If Hello packets are not received within a timeout period, the neighbour is considered down. Thus, the correct option is (c)."
  },
  {
    "id": "w3_q5",
    "week": 3,
    "qIndex": 5,
    "type": "mcq",
    "question": "Which type of address should be used when a packet needs to be delivered to every host within a specific network?",
    "options": [
      {
        "key": "a",
        "text": "Unicast address"
      },
      {
        "key": "b",
        "text": "Broadcast address"
      },
      {
        "key": "c",
        "text": "Anycast address"
      },
      {
        "key": "d",
        "text": "None of these"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "A broadcast address is used to deliver a packet to all hosts within a given network or subnetwork. Unicast targets a single specific host, and anycast targets the nearest of a group of hosts. Thus, the correct option is (b)."
  },
  {
    "id": "w3_q6",
    "week": 3,
    "qIndex": 6,
    "type": "msq",
    "question": "Which of the following statement(s) is/are false regarding routing protocols?",
    "options": [
      {
        "key": "a",
        "text": "RIP uses distance vector routing and can suffer from the count-to-infinity problem."
      },
      {
        "key": "b",
        "text": "OSPF is a link-state routing protocol."
      },
      {
        "key": "c",
        "text": "BGP is used for routing within a single autonomous system."
      },
      {
        "key": "d",
        "text": "OSPF uses Dijkstra's algorithm to compute shortest paths."
      },
      {
        "key": "e",
        "text": "RIP is typically used for routing between different autonomous systems."
      }
    ],
    "correctAnswerRaw": "c, e",
    "correctKeys": [
      "c",
      "e"
    ],
    "explanation": "BGP is an exterior routing protocol used for routing between different autonomous systems, not within a single AS, making (c) false. RIP is an interior protocol used within a single AS, not between different ASes, making (e) false. RIP's distance vector approach can indeed suffer from count-to-infinity, and OSPF is a link-state protocol using Dijkstra's algorithm - both correctly stated.\n\nThus, the correct (false) options are (c) and (e)."
  },
  {
    "id": "w3_q7",
    "week": 3,
    "qIndex": 7,
    "type": "mcq",
    "question": "What is the address used to represent the default route in a routing table (in IPv4)?",
    "options": [
      {
        "key": "a",
        "text": "127.0.0.1"
      },
      {
        "key": "b",
        "text": "255.255.255.255"
      },
      {
        "key": "c",
        "text": "0.0.0.0"
      },
      {
        "key": "d",
        "text": "192.0.0.1"
      },
      {
        "key": "e",
        "text": "None of these"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "The default route, also called the \"gateway of last resort,\" is represented by the address 0.0.0.0 (with subnet mask 0.0.0.0, or /0 in CIDR), and is used for packets that don't match any other entry in the routing table. Thus, the correct option is (c)."
  },
  {
    "id": "w3_q8",
    "week": 3,
    "qIndex": 8,
    "type": "msq",
    "question": "Which of the following statement(s) is/are false regarding IPv6?",
    "options": [
      {
        "key": "a",
        "text": "IPv6 supports address classes similar to IPv4 (Class A, B, C)."
      },
      {
        "key": "b",
        "text": "IPv6 addresses are typically represented in hexadecimal, separated by colons."
      },
      {
        "key": "c",
        "text": "IPv6 eliminates the need for fragmentation by intermediate routers."
      },
      {
        "key": "d",
        "text": "The base header size of IPv6 is variable, ranging from 20 to 60 bytes."
      }
    ],
    "correctAnswerRaw": "a, d",
    "correctKeys": [
      "a",
      "d"
    ],
    "explanation": "IPv6 does not use classful addressing like IPv4 (no Class A/B/C), making (a) false. The IPv6 base header has a fixed size of 40 bytes (not variable 20-60 bytes, which describes IPv4), making (d) false. IPv6 addresses are indeed hexadecimal and colon-separated, fragmentation in IPv6 is done only by the source (not intermediate routers). Thus, the correct (false) options are (a) and (d)."
  },
  {
    "id": "w3_q9",
    "week": 3,
    "qIndex": 9,
    "type": "numerical",
    "question": "In IPv6 base header __________ bits are used for Hop Limit?",
    "options": [],
    "correctAnswerRaw": "8",
    "correctKeys": [
      "8"
    ],
    "explanation": "The Hop Limit field in the IPv6 base header is 8 bits wide, serving a similar function to the TTL field in IPv4 - it is decremented at each hop, and the packet is discarded when it reaches 0. Thus, the correct answer is 8."
  },
  {
    "id": "w3_q10",
    "week": 3,
    "qIndex": 10,
    "type": "numerical",
    "question": "An organization is assigned 172.20.64.0/20 network block. _____ number of valid host addresses are available in this block.",
    "options": [],
    "correctAnswerRaw": "4094",
    "correctKeys": [
      "4094"
    ],
    "explanation": "A /20 prefix leaves 12 host bits, giving 2^12 = 4096 addresses. Subtracting the\nnetwork address and broadcast address leaves 4094 usable host addresses."
  },
  {
    "id": "w4_q1",
    "week": 4,
    "qIndex": 1,
    "type": "mcq",
    "question": "What is the primary purpose of a Hypervisor in a penetration testing lab setup?",
    "options": [
      {
        "key": "a",
        "text": "It encrypts all network traffic between virtual machines."
      },
      {
        "key": "b",
        "text": "It allows creation and management of multiple virtual machines on a single physical system."
      },
      {
        "key": "c",
        "text": "It is a hack-proof security layer for the host OS."
      },
      {
        "key": "d",
        "text": "It automatically patches vulnerabilities on guest machines."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "A hypervisor (Virtual Machine Monitor) allows one physical host to create and run multiple virtual machines, sharing the host's resources such as CPU, memory, and storage. It has no role in encryption, security hardening, or automatic patching. Thus, the correct option is (b)."
  },
  {
    "id": "w4_q2",
    "week": 4,
    "qIndex": 2,
    "type": "mcq",
    "question": "Which of the following information CANNOT typically be retrieved using a Whois lookup?",
    "options": [
      {
        "key": "a",
        "text": "Domain registration details"
      },
      {
        "key": "b",
        "text": "Name servers"
      },
      {
        "key": "c",
        "text": "Registrant contact information"
      },
      {
        "key": "d",
        "text": "Historical snapshots of the website"
      },
      {
        "key": "e",
        "text": "Domain expiration date"
      }
    ],
    "correctAnswerRaw": "d",
    "correctKeys": [
      "d"
    ],
    "explanation": "A Whois lookup provides registration details, name servers, contact information, and a domain's expiration date. Historical snapshots of a website are retrieved using services like Archive.org's Wayback Machine, not Whois. Thus, the correct option is (d)."
  },
  {
    "id": "w4_q3",
    "week": 4,
    "qIndex": 3,
    "type": "mcq",
    "question": "How does host discovery using an ICMP Echo sweep work?",
    "options": [
      {
        "key": "a",
        "text": "An ICMP type-8 request is sent, and an ICMP type-0 reply confirms the host is alive."
      },
      {
        "key": "b",
        "text": "A TCP SYN packet is sent, and an ACK confirms the host is alive."
      },
      {
        "key": "c",
        "text": "It broadcasts ARP requests to identify all hosts on the segment."
      },
      {
        "key": "d",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "In ICMP Echo sweep, an ICMP Echo Request (type 8) is sent to the target; receiving an ICMP Echo Reply (type 0) indicates the host is alive. TCP SYN/ACK relates to TCP- based discovery, not ICMP. Thus, the correct option is (a)."
  },
  {
    "id": "w4_q4",
    "week": 4,
    "qIndex": 4,
    "type": "msq",
    "question": "Which NMAP option(s) can be used to perform a TCP-based host discovery sweep?",
    "options": [
      {
        "key": "a",
        "text": "-PE"
      },
      {
        "key": "b",
        "text": "-PS"
      },
      {
        "key": "c",
        "text": "-PA"
      },
      {
        "key": "d",
        "text": "-PU"
      },
      {
        "key": "e",
        "text": "-PM"
      }
    ],
    "correctAnswerRaw": "b, c",
    "correctKeys": [
      "b",
      "c"
    ],
    "explanation": "-PS (TCP SYN ping) and -PA (TCP ACK ping) are used for TCP-based host discovery sweeps. -PE is used for ICMP Echo sweep, -PU is used for UDP sweep, and -PM is used for ICMP Netmask (non-echo) sweep.\n\nThus, the correct options are (b) and (c)."
  },
  {
    "id": "w4_q5",
    "week": 4,
    "qIndex": 5,
    "type": "mcq",
    "question": "During the TCP three-way handshake, what type of message does the client send first to initiate the connection?",
    "options": [
      {
        "key": "a",
        "text": "ACK"
      },
      {
        "key": "b",
        "text": "SYN"
      },
      {
        "key": "c",
        "text": "SYN-ACK"
      },
      {
        "key": "d",
        "text": "RST"
      },
      {
        "key": "e",
        "text": "FIN"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "The client initiates the TCP three-way handshake by sending a SYN packet indicating its intent to establish a connection and the initial sequence number. Thus, the correct option is (b)."
  },
  {
    "id": "w4_q6",
    "week": 4,
    "qIndex": 6,
    "type": "msq",
    "question": "In a TCP SYN (stealth) scan, which packet response(s) indicates that a port is open or closed, respectively?",
    "options": [
      {
        "key": "a",
        "text": "SYN-ACK received indicates the port is open."
      },
      {
        "key": "b",
        "text": "RST received indicates the port is closed."
      },
      {
        "key": "c",
        "text": "ACK received indicates the port is open."
      },
      {
        "key": "d",
        "text": "FIN received indicates the port is open."
      }
    ],
    "correctAnswerRaw": "a, b",
    "correctKeys": [
      "a",
      "b"
    ],
    "explanation": "In a TCP SYN scan, receiving a SYN-ACK indicates the port is open, while receiving an RST indicates the port is closed. ACK and FIN packets are not used as indicators in SYN scan responses. Thus, the correct options are (a) and (b)."
  },
  {
    "id": "w4_q7",
    "week": 4,
    "qIndex": 7,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true regarding the default networking mode (NAT) in Oracle VirtualBox?",
    "options": [
      {
        "key": "a",
        "text": "It assigns a unique public IP address to each virtual machine."
      },
      {
        "key": "b",
        "text": "It assigns the same private/virtual IP address to guest operating systems."
      },
      {
        "key": "c",
        "text": "Virtual machines using this mode can access the internet."
      },
      {
        "key": "d",
        "text": "It assigns the host system's IP address directly to guest machines."
      },
      {
        "key": "e",
        "text": "Virtual machines using NAT mode are directly reachable from outside the host by default."
      }
    ],
    "correctAnswerRaw": "b, c",
    "correctKeys": [
      "b",
      "c"
    ],
    "explanation": "The default NAT networking mode in VirtualBox assigns a virtual/private IP address to guest machines, and it allows internet access from within the guest. It does not assign unique public IPs, does not share the host's own IP address, and guests are not directly reachable from outside by default (NAT hides them behind the host). Thus, the correct options are (b) and (c)."
  },
  {
    "id": "w4_q8",
    "week": 4,
    "qIndex": 8,
    "type": "msq",
    "question": "Which of the following NMAP option(s) can be used for OS and/or service version detection?",
    "options": [
      {
        "key": "a",
        "text": "-sn"
      },
      {
        "key": "b",
        "text": "O"
      },
      {
        "key": "c",
        "text": "sV"
      },
      {
        "key": "d",
        "text": "-Pn"
      },
      {
        "key": "e",
        "text": "A"
      }
    ],
    "correctAnswerRaw": "b, c, e",
    "correctKeys": [
      "b",
      "c",
      "e"
    ],
    "explanation": "-O performs OS detection, -sV performs service/version detection, and -A (aggressive scan) combines OS detection, version detection, script scanning, and traceroute. -sn only performs host discovery (skips port scan), and -Pn skips host discovery entirely, neither of which relates to OS/version detection. Thus, the correct options are (b), (c), and (e)."
  },
  {
    "id": "w4_q9",
    "week": 4,
    "qIndex": 9,
    "type": "mcq",
    "question": "If ports 80 and 443 are found open on a target system, what can be reasonably inferred?",
    "options": [
      {
        "key": "a",
        "text": "The target is very likely running SSH services."
      },
      {
        "key": "b",
        "text": "The target is very likely hosting a website (HTTP/HTTPS)."
      },
      {
        "key": "c",
        "text": "The target is running a mail server."
      },
      {
        "key": "d",
        "text": "The target is running a DNS resolver."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "Ports 80 and 443 are the standard ports for HTTP and HTTPS, respectively, so their being open strongly suggests the target is hosting a website. SSH typically uses port 22, mail servers use ports like 25/110/143, and DNS uses port 53 - none of which are indicated here. Thus, the correct option is (b)."
  },
  {
    "id": "w4_q10",
    "week": 4,
    "qIndex": 10,
    "type": "mcq",
    "question": "If the --reason option is used along with a SYN scan. Which of the following is/are correct if reason field shows \"syn-ack\"?",
    "options": [
      {
        "key": "a",
        "text": "The port is open because NMAP received a SYN-ACK response from the target."
      },
      {
        "key": "b",
        "text": "The port is closed, and no evidence is available."
      },
      {
        "key": "c",
        "text": "The target sent an RST packet in response."
      },
      {
        "key": "d",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "When --reason shows \"syn-ack\" for a port marked open, it means NMAP concluded the port is open specifically because it received a SYN-ACK packet from the target in response to its SYN probe, which is the expected behaviour for an open port in a SYN scan. Thus, the correct option is (a)."
  },
  {
    "id": "w5_q1",
    "week": 5,
    "qIndex": 1,
    "type": "msq",
    "question": "Which of the following NMAP option(s) can trigger execution of NMAP scripts?",
    "options": [
      {
        "key": "a",
        "text": "-A"
      },
      {
        "key": "b",
        "text": "-sC"
      },
      {
        "key": "c",
        "text": "-Pn"
      },
      {
        "key": "d",
        "text": "--script=default"
      },
      {
        "key": "e",
        "text": "-sn"
      }
    ],
    "correctAnswerRaw": "a, b, d",
    "correctKeys": [
      "a",
      "b",
      "d"
    ],
    "explanation": "-sC runs the default set of NSE scripts (equivalent to --script=default), and -\nA (aggressive scan) also enables script scanning along with OS/version detection and\ntraceroute. -Pn only skips host discovery, and -sn only performs host discovery - neither\ntriggers script execution.\nThus, the correct options are (a), (b), and (d)."
  },
  {
    "id": "w5_q2",
    "week": 5,
    "qIndex": 2,
    "type": "msq",
    "question": "Which of the following tool(s)/software CANNOT be used for vulnerability scanning?",
    "options": [
      {
        "key": "a",
        "text": "Nessus"
      },
      {
        "key": "b",
        "text": "Hydra"
      },
      {
        "key": "c",
        "text": "Nexpose"
      },
      {
        "key": "d",
        "text": "Crunch"
      },
      {
        "key": "e",
        "text": "NMAP"
      }
    ],
    "correctAnswerRaw": "b, d",
    "correctKeys": [
      "b",
      "d"
    ],
    "explanation": "Nessus, Nexpose, and NMAP (with vulnerability scripts) are used for scanning vulnerabilities. Hydra is a password-cracking/brute-force tool, and Crunch is a wordlist generator - neither performs vulnerability scanning. Thus, the correct options are (b) and (d)."
  },
  {
    "id": "w5_q3",
    "week": 5,
    "qIndex": 3,
    "type": "mcq",
    "question": "Which of the following is NOT considered a common password cracking approach?",
    "options": [
      {
        "key": "a",
        "text": "Dictionary attack"
      },
      {
        "key": "b",
        "text": "Brute-force attack"
      },
      {
        "key": "c",
        "text": "Rule-based attack"
      },
      {
        "key": "d",
        "text": "Packet sniffing"
      },
      {
        "key": "e",
        "text": "Shoulder surfing"
      }
    ],
    "correctAnswerRaw": "d",
    "correctKeys": [
      "d"
    ],
    "explanation": "Dictionary, brute-force, rule-based attacks, and shoulder surfing are all recognized password cracking/acquisition approaches. Packet sniffing is a technique for capturing network traffic and is not itself a password cracking method (though captured data could later aid one). Thus, the correct option is (d)."
  },
  {
    "id": "w5_q4",
    "week": 5,
    "qIndex": 4,
    "type": "mcq",
    "question": "Which protocol in TCP/IP is connectionless and does not provide reliability?",
    "options": [
      {
        "key": "a",
        "text": "TCP"
      },
      {
        "key": "b",
        "text": "UDP"
      },
      {
        "key": "c",
        "text": "FTP"
      },
      {
        "key": "d",
        "text": "TELNET"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "UDP sends datagrams without establishing a connection; thus, it is fast but unreliable. TCP, FTP and TELNET are connection-oriented, in which a connection is established prior to data transfer. Thus, the correct option is (b)."
  },
  {
    "id": "w5_q5",
    "week": 5,
    "qIndex": 5,
    "type": "mcq",
    "question": "Which tool is primarily used to generate custom wordlists for use in dictionary-based password attacks?",
    "options": [
      {
        "key": "a",
        "text": "Hydra"
      },
      {
        "key": "b",
        "text": "Nessus"
      },
      {
        "key": "c",
        "text": "Crunch"
      },
      {
        "key": "d",
        "text": "Wireshark"
      },
      {
        "key": "e",
        "text": "Hashcat"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Crunch is specifically used to generate custom wordlists based on rules such as character sets, length, and patterns. Hydra performs the actual brute-force/dictionary login attempts, Nessus is for vulnerability scanning, Wireshark captures packets, and Hashcat cracks password hashes rather than generating wordlists. Thus, the correct option is (c)."
  },
  {
    "id": "w5_q6",
    "week": 5,
    "qIndex": 6,
    "type": "mcq",
    "question": "Which of the following statement(s) is/are false regarding malware?",
    "options": [
      {
        "key": "a",
        "text": "All malware types are capable of self-replication."
      },
      {
        "key": "b",
        "text": "Malware can grant partial or full control of a system to an attacker."
      },
      {
        "key": "c",
        "text": "Malware can be delivered through file sharing or fake/pirated software."
      },
      {
        "key": "d",
        "text": "Malware can modify, corrupt, or delete data on infected systems."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "Not all malware self-replicates - for example, Trojans typically do not self- replicate, while viruses and worms do. Malware can indeed give attackers partial/full control, spread via file sharing or fake software, and modify or delete data. Thus, the correct (false) option is (a)."
  },
  {
    "id": "w5_q7",
    "week": 5,
    "qIndex": 7,
    "type": "mcq",
    "question": "In a MAC flooding attack, what is the primary goal of overwhelming a switch's CAM table?",
    "options": [
      {
        "key": "a",
        "text": "To crash the switch permanently."
      },
      {
        "key": "b",
        "text": "To force the switch to behave like a hub, broadcasting traffic to all ports."
      },
      {
        "key": "c",
        "text": "To increase the switch's available memory."
      },
      {
        "key": "d",
        "text": "To disable the switch's power supply."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "When a switch's CAM (Content Addressable Memory) table is flooded with fake MAC entries, the switch may fail to determine the correct outgoing port for legitimate traffic and start broadcasting frames out of all ports like a hub, enabling easier packet sniffing. Thus, the correct option is (b)."
  },
  {
    "id": "w5_q8",
    "week": 5,
    "qIndex": 8,
    "type": "mcq",
    "question": "Which of the following NMAP script(s) is/are used specifically for identifying the operating system of an SMB-enabled target?",
    "options": [
      {
        "key": "a",
        "text": "smb-os-discovery"
      },
      {
        "key": "b",
        "text": "smb-brute"
      },
      {
        "key": "c",
        "text": "http-os-brute"
      },
      {
        "key": "d",
        "text": "smb-enum-users"
      },
      {
        "key": "e",
        "text": "ssh-brute."
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "The smb-os-discovery script is specifically designed to identify the operating system of a target via SMB. smb-brute performs credential brute-forcing, smb-enum-users performs user enumeration, ssh-brute cracks SSH credentials, and http-os-brute is not a valid/standard NMAP script. Thus, the correct option is (a)."
  },
  {
    "id": "w5_q9",
    "week": 5,
    "qIndex": 9,
    "type": "numerical",
    "question": "An attacker is using hydra to perform a dictionary attack on an SSH service, testing a wordlist of 5000 passwords against 4 different usernames. The maximum number of logins attempts that could be made is _________.",
    "options": [],
    "correctAnswerRaw": "20000",
    "correctKeys": [
      "20000"
    ],
    "explanation": "Total attempts = number of usernames x number of passwords = 4 x 5000 =\n20,000 (assuming every password is tried against every username, worst case before a match is\nfound).\nThus, the correct answer is 20000."
  },
  {
    "id": "w5_q10",
    "week": 5,
    "qIndex": 10,
    "type": "numerical",
    "question": "If a symmetric-style brute-force password cracker needs to try all combinations of a 4-character password using only lowercase letters (26 possible characters per position), how many total password combinations are possible?",
    "options": [],
    "correctAnswerRaw": "456976",
    "correctKeys": [
      "456976"
    ],
    "explanation": "Total combinations = 26^4 = 26 x 26 x 26 x 26 = 456,976.\nThus, the correct answer is 456976."
  },
  {
    "id": "w6_q1",
    "week": 6,
    "qIndex": 1,
    "type": "mcq",
    "question": "Which of the following attack types involves an attacker pretending to be a legitimate entity to gain unauthorized access?",
    "options": [
      {
        "key": "a",
        "text": "Replay attack"
      },
      {
        "key": "b",
        "text": "Masquerade attack"
      },
      {
        "key": "c",
        "text": "Modification attack"
      },
      {
        "key": "d",
        "text": "Denial of service attack"
      },
      {
        "key": "e",
        "text": "Traffic analysis"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "In a masquerade attack, an attacker pretends to be a legitimate entity or user to gain unauthorized access to a system or resource. Replay involves capturing and resending a transaction, modification involves altering a message in transit, DoS prevents legitimate access, and traffic analysis is a passive attack analyzing communication patterns. Thus, the correct option is (b)."
  },
  {
    "id": "w6_q2",
    "week": 6,
    "qIndex": 2,
    "type": "mcq",
    "question": "Encrypt the plaintext \"SECURE\" using a substitution cipher where each letter is replaced by its\nk-th next letter, assuming alphabets wrap around (Z followed by A) and k = 3.",
    "options": [
      {
        "key": "a",
        "text": "VHFXUH"
      },
      {
        "key": "b",
        "text": "VFEXRU"
      },
      {
        "key": "c",
        "text": "UHFXVH"
      },
      {
        "key": "d",
        "text": "VHFXRV"
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "Shifting each letter by 3: S→V, E→H, C→F, U→X, R→U, E→H. This gives the ciphertext \"VHFXUH\". Thus, the correct option is (a)."
  },
  {
    "id": "w6_q3",
    "week": 6,
    "qIndex": 3,
    "type": "mcq",
    "question": "Consider a mono-alphabetic cipher with the key mapping: (A B C D E F G H I J K L M N O P Q R S T U V W X Y Z) mapped to (Q W E R T Y U I O P A S D F G H J K L Z X C V B N M). What will be the encrypted form of the message \"CODE\"?",
    "options": [
      {
        "key": "a",
        "text": "EGRT"
      },
      {
        "key": "b",
        "text": "EGDT"
      },
      {
        "key": "c",
        "text": "EODT"
      },
      {
        "key": "d",
        "text": "EGDR"
      },
      {
        "key": "e",
        "text": "None of these"
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "Using the given mapping: C→E, O→G, D→R, E→T. Hence, \"CODE\" encrypts to \"EGRT\". Thus, the correct option is (a)."
  },
  {
    "id": "w6_q4",
    "week": 6,
    "qIndex": 4,
    "type": "mcq",
    "question": "Which of the following statement(s) is/are false regarding hashing algorithms used for message integrity?",
    "options": [
      {
        "key": "a",
        "text": "A good hash function should be resistant to collisions."
      },
      {
        "key": "b",
        "text": "The same input will always produce the same hash output."
      },
      {
        "key": "c",
        "text": "A hash function can be reversed to retrieve the original message."
      },
      {
        "key": "d",
        "text": "Even a small change in input should produce a significantly different hash output."
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "A good cryptographic hash function is collision-resistant, deterministic (the same input gives the same output), and exhibits the avalanche effect (small input changes drastically alter the output). Hash functions are one-way functions and cannot be reversed to retrieve the original input.\n\nThus, the correct (false) option is (c)."
  },
  {
    "id": "w6_q5",
    "week": 6,
    "qIndex": 5,
    "type": "mcq",
    "question": "Decrypt the ciphertext \"KHOOR\" which was encrypted using a substitution cipher with a shift of\nk = 3 (each letter replaced by its k-th next letter during encryption, the alphabets wrap around).",
    "options": [
      {
        "key": "a",
        "text": "HELLO"
      },
      {
        "key": "b",
        "text": "WORLD"
      },
      {
        "key": "c",
        "text": "HELPS"
      },
      {
        "key": "d",
        "text": "HFLLO"
      },
      {
        "key": "e",
        "text": "None of these"
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "To decrypt, shift each letter back by 3: K→H, H→E, O→L, O→L, R→O. This gives \"HELLO\". Thus, the correct option is (a)."
  },
  {
    "id": "w6_q6",
    "week": 6,
    "qIndex": 6,
    "type": "mcq",
    "question": "A DoS attack that makes a system or service inaccessible to legitimate users falls under which category of security attack?",
    "options": [
      {
        "key": "a",
        "text": "Interruption"
      },
      {
        "key": "b",
        "text": "Interception"
      },
      {
        "key": "c",
        "text": "Modification"
      },
      {
        "key": "d",
        "text": "Fabrication"
      },
      {
        "key": "e",
        "text": "Replay"
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "A Denial-of-Service attack prevents legitimate users from accessing a system/service, which is classified as an interruption attack - an attack on availability. Thus, the correct option is (a)."
  },
  {
    "id": "w6_q7",
    "week": 6,
    "qIndex": 7,
    "type": "mcq",
    "question": "For encryption using public-key cryptography, if sender A wants to send a confidential message to receiver B, which key is used to encrypt the message?",
    "options": [
      {
        "key": "a",
        "text": "A's private key"
      },
      {
        "key": "b",
        "text": "A's public key"
      },
      {
        "key": "c",
        "text": "B's public key"
      },
      {
        "key": "d",
        "text": "B's private key"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "In public-key cryptography, the sender encrypts the message using the receiver's public key, so that only the receiver can decrypt it using their corresponding private key. Thus, the correct option is (c)."
  },
  {
    "id": "w6_q8",
    "week": 6,
    "qIndex": 8,
    "type": "numerical",
    "question": "__________ is the block size (in bits) used for plaintext blocks in the Data Encryption Standard (DES) algorithm.",
    "options": [],
    "correctAnswerRaw": "64",
    "correctKeys": [
      "64"
    ],
    "explanation": "DES processes plaintext in fixed 64-bit blocks, using a 56-bit key (with 8 additional parity bits, making the stored key 64 bits, though only 56 bits are effectively used for encryption). Thus, the correct answer is 64."
  },
  {
    "id": "w6_q9",
    "week": 6,
    "qIndex": 9,
    "type": "numerical",
    "question": "150 parties want to exchange messages securely using a public key encryption technique like RSA. How many distinct key values will be required?",
    "options": [],
    "correctAnswerRaw": "300",
    "correctKeys": [
      "300"
    ],
    "explanation": "In asymmetric (public-key) encryption, each party holds two keys (public\nand private). For N parties, total keys = 2N. For N = 150, 2 x 150 = 300.\nThus, the correct answer is 300."
  },
  {
    "id": "w6_q10",
    "week": 6,
    "qIndex": 10,
    "type": "numerical",
    "question": "40 parties want to exchange messages securely using a symmetric key encryption algorithm. How many distinct keys will be required?",
    "options": [],
    "correctAnswerRaw": "780",
    "correctKeys": [
      "780"
    ],
    "explanation": "In symmetric encryption, every pair of communicating parties needs a\nseparate key. For N parties, the number of keys = NC2 = N(N-1)/2. For N = 40, 40 x 39 / 2 =\n780.\nThus, the correct answer is 780."
  },
  {
    "id": "w7_q1",
    "week": 7,
    "qIndex": 1,
    "type": "msq",
    "question": "A message M is fed to a hash function to generate hash value H = HASH(M). Which of the\nfollowing statement(s) is/are true?",
    "options": [
      {
        "key": "a",
        "text": "The number of bits in H is typically much smaller than the number of bits in M."
      },
      {
        "key": "b",
        "text": "The number of bits in H and M are always exactly equal."
      },
      {
        "key": "c",
        "text": "Hashing produces a fixed-length output regardless of input size."
      },
      {
        "key": "d",
        "text": "The output length of a hash function grows proportionally with the input length."
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "A hash function compresses an arbitrarily large input into a small, fixed- length output, regardless of input size. In hashing output length does not grow with input length. Thus, the correct options are (a) and (c)."
  },
  {
    "id": "w7_q2",
    "week": 7,
    "qIndex": 2,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true?",
    "options": [
      {
        "key": "a",
        "text": "The block size of DES is 64 bits."
      },
      {
        "key": "b",
        "text": "The key size of DES is 128 bits."
      },
      {
        "key": "c",
        "text": "The hash digest size of MD5 is 128 bits."
      },
      {
        "key": "d",
        "text": "SHA-256 produces a 512-bit digest."
      },
      {
        "key": "e",
        "text": "Triple DES uses a fixed 512-bit key."
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "DES uses a 64-bit block size (with a 56-bit key, not 128 bits). MD5 produces a 128-bit digest, SHA-256 produces a 256-bit digest (not 512), and Triple DES's effective key length is up to 168 bits, not 512. Thus, the correct options are (a) and (c)."
  },
  {
    "id": "w7_q3",
    "week": 7,
    "qIndex": 3,
    "type": "mcq",
    "question": "Which of the following statement(s) is/are true regarding SSL/TLS protocols?",
    "options": [
      {
        "key": "a",
        "text": "HTTPS relies on SSL/TLS to secure HTTP communication."
      },
      {
        "key": "b",
        "text": "SSL/TLS guarantees faster data transmission compared to plain HTTP."
      },
      {
        "key": "c",
        "text": "TLS operates at the physical layer of the network stack."
      },
      {
        "key": "d",
        "text": "The SSL Record Protocol guarantees non-repudiation of the sender."
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "SSL/TLS (and HTTPS, built on it) operate above the IP layer, and the SSL Record Protocol handles data encryption. SSL/TLS adds cryptographic overhead rather than guaranteeing faster transmission; it does not operate at the physical layer, and the Record protocol does not provide non-repudiation. Thus, the correct option is (a)."
  },
  {
    "id": "w7_q4",
    "week": 7,
    "qIndex": 4,
    "type": "mcq",
    "question": "Which of the following statement(s) is/are true regarding collision resistance in hash functions?",
    "options": [
      {
        "key": "a",
        "text": "It is a weaker requirement than second preimage resistance."
      },
      {
        "key": "b",
        "text": "It should be computationally difficult to find any two distinct messages producing the same hash."
      },
      {
        "key": "c",
        "text": "Collision resistance guarantees encryption confidentiality."
      },
      {
        "key": "d",
        "text": "Collision resistance is trivial to achieve for any hash function design."
      },
      {
        "key": "e",
        "text": "Collision resistance applies only to keyed hash functions (MACs)."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "Collision resistance requires that finding any two distinct messages with the same hash is computationally infeasible, generally a stronger (or equally strong) requirement than second preimage resistance. Collision resistance is unrelated to confidentiality, is not trivial to achieve, and applies to hash functions generally, not just keyed ones. Thus, the correct option is (b)."
  },
  {
    "id": "w7_q5",
    "week": 7,
    "qIndex": 5,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true regarding digital signature verification?",
    "options": [
      {
        "key": "a",
        "text": "The verifier uses the signer's public key to verify a signature."
      },
      {
        "key": "b",
        "text": "The verifier uses the signer's private key to verify a signature."
      },
      {
        "key": "c",
        "text": "Successful verification confirms the message has not been altered and was signed by the claimed signer."
      },
      {
        "key": "d",
        "text": "Verification requires the signer to be online and actively participating."
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "Verification uses the signer's public key, which anyone can access, allowing confirmation of both message integrity and signer identity. It does not require the signer's active participation. Thus, the correct options are (a) and (c)."
  },
  {
    "id": "w7_q6",
    "week": 7,
    "qIndex": 6,
    "type": "mcq",
    "question": "Which property of digital signatures ensures that the original signer cannot later deny having signed a message?",
    "options": [
      {
        "key": "a",
        "text": "Confidentiality"
      },
      {
        "key": "b",
        "text": "Integrity"
      },
      {
        "key": "c",
        "text": "Non-repudiation"
      },
      {
        "key": "d",
        "text": "Availability"
      },
      {
        "key": "e",
        "text": "Authentication"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Non-repudiation ensures that once a message is signed with the signer's private key, the signer cannot deny having signed it, because anyone can verify the signature with the corresponding public key. Thus, the correct option is (c)."
  },
  {
    "id": "w7_q7",
    "week": 7,
    "qIndex": 7,
    "type": "mcq",
    "question": "Which of the following statements is false regarding keyed vs unkeyed hash functions?",
    "options": [
      {
        "key": "a",
        "text": "An unkeyed hash function can be used to verify data integrity when the hash value is obtained from a trusted source."
      },
      {
        "key": "b",
        "text": "A keyed hash function requires a secret key as part of its computation."
      },
      {
        "key": "c",
        "text": "An unkeyed hash function inherently provides authenticity."
      },
      {
        "key": "d",
        "text": "HMAC can be used to provide both integrity and a degree of authentication."
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Unkeyed hash functions like MD5/SHA-256 provide integrity but not authenticity, since anyone can compute the hash without needing a secret key. Thus, the correct (false) option is (c)."
  },
  {
    "id": "w7_q8",
    "week": 7,
    "qIndex": 8,
    "type": "mcq",
    "question": "In IPSec, which mode encrypts/protects only the payload (transport layer data) while keeping the original IP header intact?",
    "options": [
      {
        "key": "a",
        "text": "Tunnel mode"
      },
      {
        "key": "b",
        "text": "Transport mode"
      },
      {
        "key": "c",
        "text": "Replay mode"
      },
      {
        "key": "d",
        "text": "Confidential mode"
      },
      {
        "key": "e",
        "text": "None of these"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "IPSec Transport mode protects only the payload (transport layer data), leaving the original IP header unencrypted/intact, whereas Tunnel mode encapsulates and protects the entire original IP packet, including its header. \"Replay mode\" and \"Confidential mode\" are not standard IPSec terms. Thus, the correct option is (b)."
  },
  {
    "id": "w7_q9",
    "week": 7,
    "qIndex": 9,
    "type": "numerical",
    "question": "Hash digest size produced by the MD5 algorithm is ______ bits.",
    "options": [],
    "correctAnswerRaw": "128",
    "correctKeys": [
      "128"
    ],
    "explanation": "MD5 always produces a fixed-length hash digest of 128 bits, regardless of the size of the input message. Thus, the correct answer is 128."
  },
  {
    "id": "w7_q10",
    "week": 7,
    "qIndex": 10,
    "type": "numerical",
    "question": "The block size used by the SHA-512 hashing algorithm is ________ bits.",
    "options": [],
    "correctAnswerRaw": "1024",
    "correctKeys": [
      "1024"
    ],
    "explanation": "SHA-512 processes the input message in blocks of 1024 bits, producing a 512-bit hash digest. Thus, the correct answer is 1024."
  },
  {
    "id": "w8_q1",
    "week": 8,
    "qIndex": 1,
    "type": "mcq",
    "question": "Which of the following statements best describes steganography?",
    "options": [
      {
        "key": "a",
        "text": "Encrypting information using public and private keys."
      },
      {
        "key": "b",
        "text": "Embedding information within another cover medium."
      },
      {
        "key": "c",
        "text": "Tunnelling data using HTTPS and TLS."
      },
      {
        "key": "d",
        "text": "Compressing data to reduce its transmission size."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "Steganography is the practice of hiding the existence of a message by embedding it within another medium such as an image, audio, video, or executable file. It is distinct from encryption (which makes data illegible but doesn't hide its existence), does not eliminate the need for secrecy in all cases, and is unrelated to data compression. Thus, the correct option is (b)."
  },
  {
    "id": "w8_q2",
    "week": 8,
    "qIndex": 2,
    "type": "msq",
    "question": "Which of the following are valid examples of steganography?",
    "options": [
      {
        "key": "a",
        "text": "Hiding text data within an image file."
      },
      {
        "key": "b",
        "text": "Hiding secret data within an audio clip."
      },
      {
        "key": "c",
        "text": "Encrypting a file so only the recipient can decrypt it."
      },
      {
        "key": "d",
        "text": "Hiding data within an executable file."
      },
      {
        "key": "e",
        "text": "Digitally signing a document to prove authorship."
      },
      {
        "key": "f",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "a, b, d",
    "correctKeys": [
      "a",
      "b",
      "d"
    ],
    "explanation": "Steganography involves hiding data within cover media like images, audio, or executables. Encrypting a file (option c) is encryption, not steganography, and digitally signing a document (option e) relates to authentication/non-repudiation, not information hiding. Thus, the correct options are (a), (b), and (d)."
  },
  {
    "id": "w8_q3",
    "week": 8,
    "qIndex": 3,
    "type": "msq",
    "question": "Which of the following is/are examples of behavioural biometrics?",
    "options": [
      {
        "key": "a",
        "text": "Fingerprint"
      },
      {
        "key": "b",
        "text": "Signature dynamics"
      },
      {
        "key": "c",
        "text": "Gait"
      },
      {
        "key": "d",
        "text": "Iris pattern"
      },
      {
        "key": "e",
        "text": "Keystroke dynamics"
      },
      {
        "key": "f",
        "text": "Retina pattern"
      },
      {
        "key": "g",
        "text": "Facial structure"
      }
    ],
    "correctAnswerRaw": "b, c, e",
    "correctKeys": [
      "b",
      "c",
      "e"
    ],
    "explanation": "Behavioural biometrics relate to patterns in human behaviour, such as signature dynamics, gait, and keystroke dynamics. Fingerprint, iris pattern, retina pattern, and facial bone structure are all physiological (physical body-based) biometrics, not behavioural. Thus, the correct options are (b), (c), and (e)."
  },
  {
    "id": "w8_q4",
    "week": 8,
    "qIndex": 4,
    "type": "mcq",
    "question": "Which biometric modality is generally considered to offer very high uniqueness and reliability for identification?",
    "options": [
      {
        "key": "a",
        "text": "Voice recognition"
      },
      {
        "key": "b",
        "text": "Facial recognition"
      },
      {
        "key": "c",
        "text": "Iris scan"
      },
      {
        "key": "d",
        "text": "Signature dynamics"
      },
      {
        "key": "e",
        "text": "Gait analysis"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Iris recognition offers very high uniqueness and reliability because the iris pattern is highly distinctive for everyone. Thus, iris scanning is a highly reliable biometric modality for identification. Thus, the correct option is (c)"
  },
  {
    "id": "w8_q5",
    "week": 8,
    "qIndex": 5,
    "type": "mcq",
    "question": "What is a Denial-of-Service (DoS) attack?",
    "options": [
      {
        "key": "a",
        "text": "An attack that deletes or modifies files stored on a system."
      },
      {
        "key": "b",
        "text": "An attack that prevents legitimate users from accessing a service."
      },
      {
        "key": "c",
        "text": "An attack that specifically targets and destroys stored password databases."
      },
      {
        "key": "d",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "A Denial-of-Service attack aims to make a service or system inaccessible to its legitimate users, typically by overwhelming its resources, rather than directly deleting files or targeting password databases. Thus, the correct option is (b)."
  },
  {
    "id": "w8_q6",
    "week": 8,
    "qIndex": 6,
    "type": "mcq",
    "question": "How does a Smurf DoS attack typically work?",
    "options": [
      {
        "key": "a",
        "text": "It sends oversized IP packets to crash the target host."
      },
      {
        "key": "b",
        "text": "It sends forged ICMP Echo requests to a network's broadcast address with the victim's spoofed source IP, causing many hosts to flood the victim with replies."
      },
      {
        "key": "c",
        "text": "It exploits buffer overflow vulnerability in web server software."
      },
      {
        "key": "d",
        "text": "It uses SQL injections to compromise a backend database."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "In a Smurf attack, the attacker sends ICMP Echo requests to a network's broadcast address with the source IP spoofed to the victim's address. All hosts on that network then send Echo replies to the victim, overwhelming it with traffic. Oversized packets describe a Ping of Death attack, not a Smurf attack. Thus, the correct option is (b)."
  },
  {
    "id": "w8_q7",
    "week": 8,
    "qIndex": 7,
    "type": "mcq",
    "question": "Which of the following attacks exploits the TCP three-way handshake by leaving connections in a half-open state?",
    "options": [
      {
        "key": "a",
        "text": "Ping of Death attack"
      },
      {
        "key": "b",
        "text": "SYN flooding attack"
      },
      {
        "key": "c",
        "text": "Smurf attack"
      },
      {
        "key": "d",
        "text": "DNS spoofing attack"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "SYN flooding exploits the TCP handshake by sending numerous SYN requests without completing the handshake (never sending the final ACK), leaving many half- open connections that consume server resources and prevent legitimate connections. Thus, the correct option is (b)."
  },
  {
    "id": "w8_q8",
    "week": 8,
    "qIndex": 8,
    "type": "msq",
    "question": "What does PGP (Pretty Good Privacy) primarily provide for secure email communication?",
    "options": [
      {
        "key": "a",
        "text": "Authentication of the sender"
      },
      {
        "key": "b",
        "text": "Confidentiality of the message content"
      },
      {
        "key": "c",
        "text": "Guaranteed message availability"
      },
      {
        "key": "d",
        "text": "Protection against email spam filtering"
      }
    ],
    "correctAnswerRaw": "a, b",
    "correctKeys": [
      "a",
      "b"
    ],
    "explanation": "PGP provides authentication and confidentiality using a combination of hashing and encryption (both symmetric and asymmetric). It does not guarantee message availability, guaranteed delivery, or spam protection. Thus, the correct options are (a) and (b)."
  },
  {
    "id": "w8_q9",
    "week": 8,
    "qIndex": 9,
    "type": "mcq",
    "question": "What is the primary purpose of the Domain Name System (DNS)?",
    "options": [
      {
        "key": "a",
        "text": "To provide end-to-end encryption for email communication."
      },
      {
        "key": "b",
        "text": "To translate human-readable domain names into IP addresses."
      },
      {
        "key": "c",
        "text": "To compress and fragment large network messages."
      },
      {
        "key": "d",
        "text": "To hide secret data inside cover media files."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "DNS's core function is to resolve human-readable domain names (such as www.example.com) into their corresponding numeric IP addresses, allowing users to access resources without memorizing IP addresses. Thus, the correct option is (b)."
  },
  {
    "id": "w8_q10",
    "week": 8,
    "qIndex": 10,
    "type": "numerical",
    "question": "Consider a grayscale image of size 1500 x 1200, where each pixel is stored using 8 bits. Using LSB steganography (1 bit hidden per pixel), how many bytes of information can be hidden in this image?",
    "options": [],
    "correctAnswerRaw": "225000",
    "correctKeys": [
      "225000"
    ],
    "explanation": "Total pixels = 1500 x 1200 = 1,800,000. Since each pixel allows hiding 1-bit,\ntotal hidden bits = 1,800,000 bits. Converting to bytes: 1,800,000 / 8 = 225,000 bytes.\nThus, the correct answer is 225000."
  },
  {
    "id": "w9_q1",
    "week": 9,
    "qIndex": 1,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true for sniffing?",
    "options": [
      {
        "key": "a",
        "text": "It is a process of analyzing network activity by capturing network traffic."
      },
      {
        "key": "b",
        "text": "It is a process of finding vulnerabilities in a network."
      },
      {
        "key": "c",
        "text": "It is a process used for user enumeration."
      },
      {
        "key": "d",
        "text": "It may require the NIC to operate in promiscuous mode to capture frames not specifically addressed to the host."
      },
      {
        "key": "e",
        "text": "None of these."
      }
    ],
    "correctAnswerRaw": "a, d",
    "correctKeys": [
      "a",
      "d"
    ],
    "explanation": "Sniffing is the process of analyzing network activity by capturing traffic. A NIC can be set to promiscuous mode to capture frames not specifically addressed to the host. It is not used to find vulnerabilities or enumerate users, which are separate techniques. Thus, the correct options are (a) and (d)."
  },
  {
    "id": "w9_q2",
    "week": 9,
    "qIndex": 2,
    "type": "msq",
    "question": "Which of the following is/are not a feature of Wireshark?",
    "options": [
      {
        "key": "a",
        "text": "Capturing and analyzing network packets."
      },
      {
        "key": "b",
        "text": "Generating statistical reports on captured traffic."
      },
      {
        "key": "c",
        "text": "Manipulating and modifying live network traffic."
      },
      {
        "key": "d",
        "text": "Displaying packet details with GUI support."
      },
      {
        "key": "e",
        "text": "Carrying out SQL injection attacks."
      },
      {
        "key": "f",
        "text": "Filtering captured packets by protocol."
      }
    ],
    "correctAnswerRaw": "c, e",
    "correctKeys": [
      "c",
      "e"
    ],
    "explanation": "Wireshark can capture, analyze, filter, and generate statistical reports on traffic with GUI support. It cannot manipulate live traffic or perform SQL injection attacks. Thus, the correct options are (c) and (e)."
  },
  {
    "id": "w9_q3",
    "week": 9,
    "qIndex": 3,
    "type": "msq",
    "question": "Which of the following protocols are vulnerable to sniffing attacks?",
    "options": [
      {
        "key": "a",
        "text": "HTTP"
      },
      {
        "key": "b",
        "text": "FTP"
      },
      {
        "key": "c",
        "text": "Telnet"
      },
      {
        "key": "d",
        "text": "HTTPS"
      },
      {
        "key": "e",
        "text": "SSL"
      },
      {
        "key": "f",
        "text": "SSH"
      }
    ],
    "correctAnswerRaw": "a, b, c",
    "correctKeys": [
      "a",
      "b",
      "c"
    ],
    "explanation": "HTTP, FTP, and Telnet transmit data in plaintext, making them vulnerable to sniffing. HTTPS, SSL, and SSH encrypt data in transit, protecting it from being read even if intercepted. Thus, the correct options are (a), (b), and (c)."
  },
  {
    "id": "w9_q4",
    "week": 9,
    "qIndex": 4,
    "type": "msq",
    "question": "Which of the following feature(s) is/are not present in the Ettercap tool?",
    "options": [
      {
        "key": "a",
        "text": "IP-based and MAC-based filtering."
      },
      {
        "key": "b",
        "text": "Character injection into live connections."
      },
      {
        "key": "c",
        "text": "Packet filtering and dropping."
      },
      {
        "key": "d",
        "text": "SQL injection automation."
      },
      {
        "key": "e",
        "text": "Password cracking via dictionary attack."
      }
    ],
    "correctAnswerRaw": "d, e",
    "correctKeys": [
      "d",
      "e"
    ],
    "explanation": "Ettercap supports IP/MAC-based filtering, character injection into active connections, and packet filtering/dropping. It does not automate SQL injection or perform dictionary-based password cracking. Thus, the correct options are (d) and (e)."
  },
  {
    "id": "w9_q5",
    "week": 9,
    "qIndex": 5,
    "type": "mcq",
    "question": "Which of the following is not a human-based social engineering attack?",
    "options": [
      {
        "key": "a",
        "text": "Impersonation"
      },
      {
        "key": "b",
        "text": "Shoulder surfing"
      },
      {
        "key": "c",
        "text": "Piggybacking/tailgating"
      },
      {
        "key": "d",
        "text": "Phishing email"
      }
    ],
    "correctAnswerRaw": "d",
    "correctKeys": [
      "d"
    ],
    "explanation": "Impersonation, shoulder surfing, and piggybacking/tailgating all involve direct human interaction or physical presence, so they are human-based social engineering. Phishing is a computer-based social engineering attack, carried out through electronic communication rather than direct human contact. Thus, the correct option is (d)."
  },
  {
    "id": "w9_q6",
    "week": 9,
    "qIndex": 6,
    "type": "mcq",
    "question": "A DoS attack that exploits the TCP three-way handshake by leaving connections incomplete is called:",
    "options": [
      {
        "key": "a",
        "text": "SYN Flooding"
      },
      {
        "key": "b",
        "text": "ICMP Flood"
      },
      {
        "key": "c",
        "text": "Ping of Death"
      },
      {
        "key": "d",
        "text": "UDP Flood"
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "SYN Flooding exploits the TCP handshake by sending repeated SYN requests without completing the final ACK step, leaving many half-open connections that exhaust the server's connection queue. Thus, the correct option is (a)."
  },
  {
    "id": "w9_q7",
    "week": 9,
    "qIndex": 7,
    "type": "mcq",
    "question": "Which tool is specifically known for performing DoS attacks by sending partial HTTP requests and never completing them?",
    "options": [
      {
        "key": "a",
        "text": "Hydra"
      },
      {
        "key": "b",
        "text": "Wireshark"
      },
      {
        "key": "c",
        "text": "Slowloris"
      },
      {
        "key": "d",
        "text": "Crunch"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Slowloris opens many connections to a web server and sends partial HTTP requests, keeping them open indefinitely to exhaust the server's available connections and cause a denial of service. Thus, the correct option is (c)."
  },
  {
    "id": "w9_q8",
    "week": 9,
    "qIndex": 8,
    "type": "mcq",
    "question": "Which mode allows a network interface card (NIC) to capture frames that are not specifically addressed to the host?",
    "options": [
      {
        "key": "a",
        "text": "Monitor mode"
      },
      {
        "key": "b",
        "text": "Transparent mode"
      },
      {
        "key": "c",
        "text": "Promiscuous mode"
      },
      {
        "key": "d",
        "text": "Bridge mode"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Promiscuous mode allows the NIC to capture frames that are not specifically addressed to its own MAC address. Thus, the correct option is (c)."
  },
  {
    "id": "w9_q9",
    "week": 9,
    "qIndex": 9,
    "type": "msq",
    "question": "Which of the following is/are examples of computer-based social engineering attacks?",
    "options": [
      {
        "key": "a",
        "text": "Phishing emails"
      },
      {
        "key": "b",
        "text": "Pop-up window scams"
      },
      {
        "key": "c",
        "text": "Shoulder surfing"
      },
      {
        "key": "d",
        "text": "Chain letter emails"
      },
      {
        "key": "e",
        "text": "Tailgating"
      }
    ],
    "correctAnswerRaw": "a, b, d",
    "correctKeys": [
      "a",
      "b",
      "d"
    ],
    "explanation": "Phishing emails, pop-up window scams, and chain letter emails are delivered through computer/electronic means, classifying them as computer-based social engineering. Shoulder surfing and tailgating require physical presence, making them human-based social engineering attacks. Thus, the correct options are (a), (b), and (d)."
  },
  {
    "id": "w9_q10",
    "week": 9,
    "qIndex": 10,
    "type": "mcq",
    "question": "What is the primary purpose of ARP spoofing in the context of sniffing attacks?",
    "options": [
      {
        "key": "a",
        "text": "To increase the bandwidth available to the attacker."
      },
      {
        "key": "b",
        "text": "To redirect traffic between two hosts through the attacker's machine for interception."
      },
      {
        "key": "c",
        "text": "To encrypt network traffic for secure transmission."
      },
      {
        "key": "d",
        "text": "To permanently disable a target host's network interface."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "ARP spoofing associates the attacker's MAC address with a legitimate host's IP address, redirecting traffic intended for that host through the attacker's machine and enabling interception (man-in-the-middle), often used to facilitate sniffing on switched networks. Thus, the correct option is (b)."
  },
  {
    "id": "w10_q1",
    "week": 10,
    "qIndex": 1,
    "type": "msq",
    "question": "Which of the following are examples of hardware-based attacks?",
    "options": [
      {
        "key": "a",
        "text": "Physical probing"
      },
      {
        "key": "b",
        "text": "SQL injection"
      },
      {
        "key": "c",
        "text": "Cross-site scripting"
      },
      {
        "key": "d",
        "text": "Electromagnetic emission analysis"
      },
      {
        "key": "e",
        "text": "Phishing"
      }
    ],
    "correctAnswerRaw": "a, d",
    "correctKeys": [
      "a",
      "d"
    ],
    "explanation": "Physical probing and electromagnetic emission analysis both require access to or measurement of the physical hardware running a computation. SQL injection, cross-site scripting, and phishing are software/application-level or social engineering attacks unrelated to hardware access. Thus, the correct options are (a) and (d)."
  },
  {
    "id": "w10_q2",
    "week": 10,
    "qIndex": 2,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true regarding side-channel attacks?",
    "options": [
      {
        "key": "a",
        "text": "They exploit weaknesses in the implementation of an algorithm, not the algorithm itself."
      },
      {
        "key": "b",
        "text": "They may require physical access to (or close proximity to) the target device, depending on the side channel being exploited."
      },
      {
        "key": "c",
        "text": "They rely solely on analyzing input/output pairs of the algorithm."
      },
      {
        "key": "d",
        "text": "They can exploit information such as timing, power consumption, or electromagnetic emissions."
      },
      {
        "key": "e",
        "text": "They exploit mathematical weaknesses in the cryptographic algorithm's design."
      }
    ],
    "correctAnswerRaw": "a, b, d",
    "correctKeys": [
      "a",
      "b",
      "d"
    ],
    "explanation": "Side-channel attacks exploit weaknesses in how an algorithm is implemented (hardware or software), rather than flaws in the underlying algorithm's mathematical design. Depending on the side channel being exploited, they may use information such as timing, power consumption, or electromagnetic emissions and may require physical access or close proximity to the target device. They do not rely solely on input/output analysis, which is characteristic of black-box analysis. Thus, the correct options are (a), (b), and (d)."
  },
  {
    "id": "w10_q3",
    "week": 10,
    "qIndex": 3,
    "type": "mcq",
    "question": "For modular exponentiation of x22 using the square-and-multiply method, how many squaring and multiplication operations are required, respectively?",
    "options": [
      {
        "key": "a",
        "text": "4 and 2"
      },
      {
        "key": "b",
        "text": "3 and 2"
      },
      {
        "key": "c",
        "text": "4 and 3"
      },
      {
        "key": "d",
        "text": "5 and 2"
      },
      {
        "key": "e",
        "text": "3 and 3"
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "The binary representation of 22 is 10110. Number of squaring's = total bits -\n1 = 5 - 1 = 4. Number of multiplications = (number of 1's) - 1 = 3 - 1 = 2. Hence, 4 squaring's and\n2 multiplications are required.\nThus, the correct option is (a)."
  },
  {
    "id": "w10_q4",
    "week": 10,
    "qIndex": 4,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true regarding Differential Power Analysis (DPA) and Simple Power Analysis (SPA)?",
    "options": [
      {
        "key": "a",
        "text": "DPA requires only a single power trace measurement."
      },
      {
        "key": "b",
        "text": "DPA requires multiple power trace measurements combined with statistical analysis."
      },
      {
        "key": "c",
        "text": "DPA uses statistical analysis of multiple traces to reveal information that may not be apparent from individual traces."
      },
      {
        "key": "d",
        "text": "DPA is generally less effective than SPA."
      },
      {
        "key": "e",
        "text": "SPA relies on directly observing patterns in a single or few traces."
      }
    ],
    "correctAnswerRaw": "b, c, e",
    "correctKeys": [
      "b",
      "c",
      "e"
    ],
    "explanation": "DPA uses multiple power measurements combined with statistical analysis to identify correlations between power consumption and sensitive data. In contrast, SPA relies on directly observing distinguishable patterns in a single or small number of traces. DPA is therefore useful for revealing leakage that may not be apparent from individual traces. Thus, the correct options are (b), (c), and (e)."
  },
  {
    "id": "w10_q5",
    "week": 10,
    "qIndex": 5,
    "type": "mcq",
    "question": "Which property of a PUF refers to the requirement that, given a PUF and an input (challenge) x,\nits corresponding output (response) y = PUF(x) can be computed efficiently?",
    "options": [
      {
        "key": "a",
        "text": "Unclonability"
      },
      {
        "key": "b",
        "text": "One-wayness"
      },
      {
        "key": "c",
        "text": "Evaluability"
      },
      {
        "key": "d",
        "text": "Unpredictability"
      },
      {
        "key": "e",
        "text": "Tamper-evidence"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "Evaluability refers to the property that computing the response y = PUF(x)\nfor a given challenge x should be computationally easy/efficient. Unclonability refers to the\ndifficulty of constructing a different device that mimics the same challenge-response behaviour,\nand one-wayness refers to the difficulty of finding x given only y.\nThus, the correct option is (c)."
  },
  {
    "id": "w10_q6",
    "week": 10,
    "qIndex": 6,
    "type": "mcq",
    "question": "__________ is the full form of the acronym PUF used in hardware security.",
    "options": [
      {
        "key": "a",
        "text": "Physically Unique Function"
      },
      {
        "key": "b",
        "text": "Physically Unclonable Function"
      },
      {
        "key": "c",
        "text": "Protected Unclonable Feature"
      },
      {
        "key": "d",
        "text": "Physically Untraceable Function"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "PUF stands for Physically Unclonable Function, a hardware security primitive that exploits inherent manufacturing variations in a device to generate unique, device- specific responses. Thus, the correct option is (b)."
  },
  {
    "id": "w10_q7",
    "week": 10,
    "qIndex": 7,
    "type": "mcq",
    "question": "What is a hardware Trojan?",
    "options": [
      {
        "key": "a",
        "text": "A malicious software virus that specifically targets firmware update files."
      },
      {
        "key": "b",
        "text": "A malicious, intentional modification to a chip's circuitry that activates under specific trigger conditions."
      },
      {
        "key": "c",
        "text": "A testing tool used to validate hardware functionality before shipping."
      },
      {
        "key": "d",
        "text": "A feature designed to make hardware run faster under heavy load."
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "A hardware Trojan is a malicious modification embedded within a chip's circuitry, remaining dormant until a specific triggering condition is met, at which point it activates an unintended, harmful operation (the \"payload\"). Thus, the correct option is (b)."
  },
  {
    "id": "w10_q8",
    "week": 10,
    "qIndex": 8,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true regarding hardware Trojans?",
    "options": [
      {
        "key": "a",
        "text": "They typically incur small hardware overhead, making them difficult to detect."
      },
      {
        "key": "b",
        "text": "They are generally easy to detect using a single, universal detection method."
      },
      {
        "key": "c",
        "text": "Detecting hardware Trojans often introduces additional design, testing, or runtime overhead."
      },
      {
        "key": "d",
        "text": "Hardware Trojans are exclusively inserted through software-level modifications."
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "Hardware Trojans typically add minimal overhead to remain stealthy, and no single detection method can reliably catch all Trojan variants, with detection efforts often adding their own overhead. No universal, easy detection method exists, and Trojans are inserted at the hardware (circuit) level, not through software modifications. Thus, the correct options are (a) and (c)."
  },
  {
    "id": "w10_q9",
    "week": 10,
    "qIndex": 9,
    "type": "mcq",
    "question": "Which of the following hardware attack(s) are generally considered invasive in nature?",
    "options": [
      {
        "key": "a",
        "text": "Black-box testing"
      },
      {
        "key": "b",
        "text": "Physical probing"
      },
      {
        "key": "c",
        "text": "Side-channel power analysis"
      },
      {
        "key": "d",
        "text": "Timing analysis"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "Physical probing and reverse engineering that involves decapping or delayering a chip requires direct physical alteration of the device, making them invasive. Black- box testing, side-channel power analysis, and timing analysis are typically non-invasive, relying on external measurements or input/output observations rather than physically opening the chip. Thus, the correct option is (b)."
  },
  {
    "id": "w10_q10",
    "week": 10,
    "qIndex": 10,
    "type": "msq",
    "question": "Which of the following software-level technique(s) can help mitigate timing-based side-channel attacks?",
    "options": [
      {
        "key": "a",
        "text": "Introducing redundant/dummy computations to equalize execution time across branches."
      },
      {
        "key": "b",
        "text": "Masking sensitive intermediate data values during computation."
      },
      {
        "key": "c",
        "text": "Deliberately increasing overall program complexity without addressing timing variance."
      },
      {
        "key": "d",
        "text": "Ensuring constant-time implementations for security-critical operations."
      }
    ],
    "correctAnswerRaw": "a, d",
    "correctKeys": [
      "a",
      "d"
    ],
    "explanation": "Introducing redundant or dummy computations to equalize execution time across different execution paths and using constant-time implementations for security-critical operations can help mitigate timing-based side-channel attacks. Simply increasing program complexity without addressing timing variations does not prevent timing leakage. Masking sensitive intermediate values is primarily used to mitigate other forms of side-channel leakage and does not, by itself, eliminate timing leakage. Thus, the correct options are (a) and (d)."
  },
  {
    "id": "w11_q1",
    "week": 11,
    "qIndex": 1,
    "type": "mcq",
    "question": "Which of the following Metasploit modules is used to take advantage of a known vulnerability on a target system?",
    "options": [
      {
        "key": "a",
        "text": "Payload"
      },
      {
        "key": "b",
        "text": "Exploit"
      },
      {
        "key": "c",
        "text": "Encoder"
      },
      {
        "key": "d",
        "text": "Auxiliary"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "The exploit module is specifically designed to take advantage of a vulnerability in a target system or application. The payload establishes a communication channel after exploitation, the encoder obfuscates payloads to evade detection, and the auxiliary module performs scanning or brute-force tasks. Thus, the correct option is (b)."
  },
  {
    "id": "w11_q2",
    "week": 11,
    "qIndex": 2,
    "type": "mcq",
    "question": "Which command is used to launch the Metasploit Framework console?",
    "options": [
      {
        "key": "a",
        "text": "msfvenom"
      },
      {
        "key": "b",
        "text": "msfconsole"
      },
      {
        "key": "c",
        "text": "metasploit-cli"
      },
      {
        "key": "d",
        "text": "msf-start"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "The \"msfcnsole\" command is used to launch the Metasploit Framework. Thus, the correct option is (b)."
  },
  {
    "id": "w11_q3",
    "week": 11,
    "qIndex": 3,
    "type": "mcq",
    "question": "Which Metasploit command is used to check which target operating systems are compatible with a selected exploit?",
    "options": [
      {
        "key": "a",
        "text": "show targets"
      },
      {
        "key": "b",
        "text": "set targets"
      },
      {
        "key": "c",
        "text": "check compatibility"
      },
      {
        "key": "d",
        "text": "show exploits"
      },
      {
        "key": "e",
        "text": "show payloads"
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "The \"show targets\" command displays the list of compatible target operating systems for the currently selected exploit module, helping the user select the correct target environment. Thus, the correct option is (a)."
  },
  {
    "id": "w11_q4",
    "week": 11,
    "qIndex": 4,
    "type": "mcq",
    "question": "Which Metasploit option is used to specify the target's IP address (the remote host to be attacked)?",
    "options": [
      {
        "key": "a",
        "text": "set LHOST"
      },
      {
        "key": "b",
        "text": "set LPORT"
      },
      {
        "key": "c",
        "text": "set RHOST"
      },
      {
        "key": "d",
        "text": "set RPORT"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "RHOST is used to set the remote host (target) IP address, while LHOST sets the attacker's (local) IP, and RPORT/LPORT set the respective port numbers. Thus, the correct option is (c)."
  },
  {
    "id": "w11_q5",
    "week": 11,
    "qIndex": 5,
    "type": "mcq",
    "question": "Which command in Metasploit's Meterpreter shell is used to retrieve stored user account password hashes from the target system?",
    "options": [
      {
        "key": "a",
        "text": "Getuid"
      },
      {
        "key": "b",
        "text": "Getsystem"
      },
      {
        "key": "c",
        "text": "Hashdump"
      },
      {
        "key": "d",
        "text": "Sysinfo"
      },
      {
        "key": "e",
        "text": "ps"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "The hashdump command retrieves stored password hashes from the target system's SAM database (on Windows) or equivalent, which can then be used for offline password cracking. getuid shows the current user ID, getsystem attempts privilege escalation, sysinfo shows target system details, and ps lists running processes. Thus, the correct option is (c)."
  },
  {
    "id": "w11_q6",
    "week": 11,
    "qIndex": 6,
    "type": "mcq",
    "question": "Which tool is specifically designed to perform brute-force discovery of hidden files and directories on a web server?",
    "options": [
      {
        "key": "a",
        "text": "SQLMAP"
      },
      {
        "key": "b",
        "text": "Dirb"
      },
      {
        "key": "c",
        "text": "Hydra"
      },
      {
        "key": "d",
        "text": "Crunch"
      },
      {
        "key": "e",
        "text": "Hashcat"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "Dirb performs brute-force discovery of existing and hidden pages or directories on a web server using a wordlist. SQLMap automates SQL injection attacks, Hydra and Crunch are password-cracking and wordlist-generating tools, respectively; and Hashcat cracks password hashes. Thus, the correct option is (b)."
  },
  {
    "id": "w11_q7",
    "week": 11,
    "qIndex": 7,
    "type": "mcq",
    "question": "If a web page is vulnerable to error-based SQL injection, what is the expected behavior upon incorrect/malicious user input?",
    "options": [
      {
        "key": "a",
        "text": "It will display a database error message revealing information about the query structure."
      },
      {
        "key": "b",
        "text": "It will silently return no output at all."
      },
      {
        "key": "c",
        "text": "It will redirect the user to a login page automatically."
      },
      {
        "key": "d",
        "text": "It will crash the entire web server permanently."
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "In error-based SQL injections, malformed or malicious input causes the application to generate a visible database error message, which can leak useful information about the underlying query structure and database schema. Thus, the correct option is (a)."
  },
  {
    "id": "w11_q8",
    "week": 11,
    "qIndex": 8,
    "type": "mcq",
    "question": "Which SQLMAP option is used to list all database names available on the target system?",
    "options": [
      {
        "key": "a",
        "text": "--tables"
      },
      {
        "key": "b",
        "text": "--dbs"
      },
      {
        "key": "c",
        "text": "--dump"
      },
      {
        "key": "d",
        "text": "--current-db"
      },
      {
        "key": "e",
        "text": "--passwords"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "The --dbs option lists all available database names on the target. --tables lists tables within a chosen database, --dump extracts data from specified tables, --current-db shows the currently active database, and --passwords retrieves password hashes. Thus, the correct option is (b)."
  },
  {
    "id": "w11_q9",
    "week": 11,
    "qIndex": 9,
    "type": "msq",
    "question": "Which of the following is/are recognized types of Cross-Site Scripting (XSS) attacks?",
    "options": [
      {
        "key": "a",
        "text": "Stored XSS"
      },
      {
        "key": "b",
        "text": "Reflected XSS"
      },
      {
        "key": "c",
        "text": "DOM-based XSS"
      },
      {
        "key": "d",
        "text": "SQL-based XSS"
      },
      {
        "key": "e",
        "text": "Cookie-Injection XSS"
      }
    ],
    "correctAnswerRaw": "a, b, c",
    "correctKeys": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Stored, Reflected, and DOM-based XSS are the three classical, recognized categories of Cross-Site Scripting attacks. \"SQL-based XSS\" and \"Cookie-Injection XSS\" are not standard or recognized XSS classifications. Thus, the correct options are (a), (b), and (c)."
  },
  {
    "id": "w11_q10",
    "week": 11,
    "qIndex": 10,
    "type": "msq",
    "question": "Consider the following simplified query used by a login form:\nSELECT * FROM users WHERE username = 'INPUT1' AND password = 'INPUT2'\nWhich of the following input(s) for the username field, if unsanitized, would represent a classic\nSQL injection attempt to bypass authentication?",
    "options": [
      {
        "key": "a",
        "text": "admin"
      },
      {
        "key": "b",
        "text": "admin' OR '1'='1"
      },
      {
        "key": "c",
        "text": "admin123"
      },
      {
        "key": "d",
        "text": "'OR 1=1 -"
      },
      {
        "key": "e",
        "text": "guest_user"
      }
    ],
    "correctAnswerRaw": "b, d",
    "correctKeys": [
      "b",
      "d"
    ],
    "explanation": "Both \"admin' OR '1'='1\" and \"' OR 1=1 --\" are classic SQL injection\npayloads that manipulate the query's logic to always evaluate as true, potentially bypassing\nauthentication. The other options are normal, non-malicious input values.\nThus, the correct options are (b) and (d)."
  },
  {
    "id": "w12_q1",
    "week": 12,
    "qIndex": 1,
    "type": "mcq",
    "question": "In an ICMP Echo sweep, if the scanner receives an ICMP Type 0 packet in response to an ICMP Type 8 request, what does this indicate?",
    "options": [
      {
        "key": "a",
        "text": "The target host is alive/up"
      },
      {
        "key": "b",
        "text": "The target host is down"
      },
      {
        "key": "c",
        "text": "The target port is filtered"
      },
      {
        "key": "d",
        "text": "The target host does not support ICMP"
      }
    ],
    "correctAnswerRaw": "a",
    "correctKeys": [
      "a"
    ],
    "explanation": "ICMP Type 0 is an Echo Reply. Receiving this in response to an Echo Request (Type 8) confirms that the target host is alive and responding. Thus, the correct option is (a)."
  },
  {
    "id": "w12_q2",
    "week": 12,
    "qIndex": 2,
    "type": "msq",
    "question": "Which of the following NMAP option(s) can be used to perform a TCP-based sweep for host discovery?",
    "options": [
      {
        "key": "a",
        "text": "-PE"
      },
      {
        "key": "b",
        "text": "-PS"
      },
      {
        "key": "c",
        "text": "-PA"
      },
      {
        "key": "d",
        "text": "-PU"
      },
      {
        "key": "e",
        "text": "-PM"
      }
    ],
    "correctAnswerRaw": "b, c",
    "correctKeys": [
      "b",
      "c"
    ],
    "explanation": "-PS (TCP SYN ping) and -PA (TCP ACK ping) are used for TCP-based host discovery sweeps. -PE is ICMP Echo sweep, -PU is UDP sweep, and -PM is ICMP Address Mask (non-echo) sweep. Thus, the correct options are (b) and (c)."
  },
  {
    "id": "w12_q3",
    "week": 12,
    "qIndex": 3,
    "type": "msq",
    "question": "Which of the following are automatically performed when using the NMAP -sn option?",
    "options": [
      {
        "key": "a",
        "text": "ICMP Echo sweep"
      },
      {
        "key": "b",
        "text": "TCP sweep"
      },
      {
        "key": "c",
        "text": "UDP sweep"
      },
      {
        "key": "d",
        "text": "All of these"
      }
    ],
    "correctAnswerRaw": "a, b",
    "correctKeys": [
      "a",
      "b"
    ],
    "explanation": "The -sn option performs host discovery using ICMP Echo and TCP sweep techniques together, but does not include UDP sweep as part of its default behavior. Thus, the correct options are (a) and (b)."
  },
  {
    "id": "w12_q4",
    "week": 12,
    "qIndex": 4,
    "type": "mcq",
    "question": "Which NMAP option treats all hosts as online, effectively skipping the host discovery phase?",
    "options": [
      {
        "key": "a",
        "text": "-sL"
      },
      {
        "key": "b",
        "text": "-sP"
      },
      {
        "key": "c",
        "text": "-PO"
      },
      {
        "key": "d",
        "text": "-sU"
      },
      {
        "key": "e",
        "text": "-Pn"
      }
    ],
    "correctAnswerRaw": "e",
    "correctKeys": [
      "e"
    ],
    "explanation": "The -Pn option instructs NMAP to skip host discovery entirely and treat all specified hosts as online, proceeding directly to the scanning phase. -sL only lists targets, -sP performs a ping-only scan, -PO is IP protocol ping, and -sU performs a UDP scan. Thus, the correct option is (e)."
  },
  {
    "id": "w12_q5",
    "week": 12,
    "qIndex": 5,
    "type": "mcq",
    "question": "Consider the following statements: (i) -sn performs host discovery only, without any port scanning. (ii) -Pn skips host discovery entirely and proceeds directly to port scanning.",
    "options": [
      {
        "key": "a",
        "text": "Only (i) is true"
      },
      {
        "key": "b",
        "text": "Only (ii) is true"
      },
      {
        "key": "c",
        "text": "Both (i) and (ii) are true"
      },
      {
        "key": "d",
        "text": "Both (i) and (ii) are false"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "-sn performs host discovery only, skipping port scanning entirely, while -Pn does the opposite - skipping host discovery and assuming all hosts are online, which is useful when a target blocks ICMP-based discovery but is still reachable for port scanning. These two options serve distinct, near-opposite purposes, not identical ones, and -sn does not perform a port scan afterwards. Thus, the correct option is (c)."
  },
  {
    "id": "w12_q6",
    "week": 12,
    "qIndex": 6,
    "type": "msq",
    "question": "Which of the following statement(s) is/are true regarding NMAP's -F (fast scan) option?",
    "options": [
      {
        "key": "a",
        "text": "It scans the top 100 most common ports."
      },
      {
        "key": "b",
        "text": "It scans all 65535 ports."
      },
      {
        "key": "c",
        "text": "It is faster than a default scan because it checks fewer ports."
      },
      {
        "key": "d",
        "text": "It is equivalent to using --top-ports 1000"
      }
    ],
    "correctAnswerRaw": "a, c",
    "correctKeys": [
      "a",
      "c"
    ],
    "explanation": "The -F (fast) option scans only the top 100 most common ports, making it quicker than the default scan (which covers the top 1000 ports). It does not scan all 65535 ports, and it is not equivalent to --top-ports 1000, since it covers only 100 ports, not 1000. Thus, the correct options are (a) and (c)."
  },
  {
    "id": "w12_q7",
    "week": 12,
    "qIndex": 7,
    "type": "mcq",
    "question": "Which NMAP option is specifically used to conduct a UDP port scan?",
    "options": [
      {
        "key": "a",
        "text": "-sT"
      },
      {
        "key": "b",
        "text": "-sS"
      },
      {
        "key": "c",
        "text": "-sU"
      },
      {
        "key": "d",
        "text": "-sA"
      },
      {
        "key": "e",
        "text": "-sN"
      }
    ],
    "correctAnswerRaw": "c",
    "correctKeys": [
      "c"
    ],
    "explanation": "The -sU option performs a UDP scan. -sT is TCP Connect scan, -sS is TCP SYN scan, -sA is TCP ACK scan, and -sN is NULL scan (all TCP-based, not UDP). Thus, the correct option is (c)."
  },
  {
    "id": "w12_q8",
    "week": 12,
    "qIndex": 8,
    "type": "mcq",
    "question": "Which scanning technique completes the full TCP three-way handshake with the target port to determine its state?",
    "options": [
      {
        "key": "a",
        "text": "TCP SYN scan"
      },
      {
        "key": "b",
        "text": "TCP Connect scan"
      },
      {
        "key": "c",
        "text": "FIN scan"
      },
      {
        "key": "d",
        "text": "NULL scan"
      },
      {
        "key": "e",
        "text": "Xmas scan"
      }
    ],
    "correctAnswerRaw": "b",
    "correctKeys": [
      "b"
    ],
    "explanation": "TCP Connect scan (-sT) completes the entire three-way handshake (SYN, SYN-ACK, ACK) with the target port. TCP SYN scan is a \"half-open\" scan that doesn't complete the handshake, while FIN, NULL, and Xmas scans use unusual flag combinations and don't involve a standard handshake at all. Thus, the correct option is (b)."
  },
  {
    "id": "w12_q9",
    "week": 12,
    "qIndex": 9,
    "type": "numerical",
    "question": "How many ports will be scanned using the NMAP command \"nmap --top-ports 20 target_ip\"?",
    "options": [],
    "correctAnswerRaw": "20",
    "correctKeys": [
      "20"
    ],
    "explanation": "The --top-ports option scans the N most commonly used ports specified.\nHere, N = 20, so exactly 20 of the most common ports will be scanned."
  },
  {
    "id": "w12_q10",
    "week": 12,
    "qIndex": 10,
    "type": "numerical",
    "question": "How many total IP addresses will be scanned when executing the command nmap -sL 10.10.5.100-115?",
    "options": [],
    "correctAnswerRaw": "16",
    "correctKeys": [
      "16"
    ],
    "explanation": "The command scans all IP addresses from 10.10.5.100 to 10.10.5.115, inclusive. Thus, the correct answer is 16."
  }
];
