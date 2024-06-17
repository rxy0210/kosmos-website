"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[372],{2088:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(7624),i=t(2172);const o={id:"introduction",title:"Introduction"},r="Introduction",l={id:"v0.2.0/getting-started/introduction",title:"Introduction",description:"What is Kosmos?",source:"@site/docs/v0.2.0/getting-started/introduction.md",sourceDirName:"v0.2.0/getting-started",slug:"/v0.2.0/getting-started/introduction",permalink:"/website/v0.2.0/getting-started/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/v0.2.0/getting-started/introduction.md",tags:[],version:"current",lastUpdatedBy:"Qi Wang",lastUpdatedAt:1718612828,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/website/v0.2.0/quick-start"}},c={},d=[{value:"What is Kosmos?",id:"what-is-kosmos",level:2},{value:"ClusterLink",id:"clusterlink",level:2},{value:"Network Architecture",id:"network-architecture",level:3},{value:"ClusterTree",id:"clustertree",level:2},{value:"Scheduler",id:"scheduler",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(s.h2,{id:"what-is-kosmos",children:"What is Kosmos?"}),"\n",(0,n.jsx)(s.p,{children:"Kosmos is an open-source, all-in-one distributed cloud-native solution. The name \"kosmos\" combines 'k' representing Kubernetes and 'cosmos' which means universe in Greek, symbolizing the limitless expansion of Kubernetes."}),"\n",(0,n.jsxs)(s.p,{children:["Currently, Kosmos primarily consists of three major modules: ",(0,n.jsx)(s.code,{children:"ClusterLink"}),", ",(0,n.jsx)(s.code,{children:"ClusterTree"})," and ",(0,n.jsx)(s.code,{children:"Scheduler"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"clusterlink",children:"ClusterLink"}),"\n",(0,n.jsxs)(s.p,{children:["The target of ClusterLink is to establish connectivity between multiple Kubernetes clusters. This module can be deployed and used independently. ClusterLink enables ",(0,n.jsx)(s.code,{children:"Pods"})," to access ",(0,n.jsx)(s.code,{children:"Pods"})," and ",(0,n.jsx)(s.code,{children:"Services"})," across clusters, as if they were in the single cluster. Currently, this module primarily offers the following ability:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Cross-cluster PodIP and ServiceIP communication"}),": L3 network connections across multiple Kubernetes clusters, based on tunneling technologies such as VxLAN and IPsec. This allows users to conduct ",(0,n.jsx)(s.code,{children:"Pod-to-Pod"})," and ",(0,n.jsx)(s.code,{children:"Pod-to-Service"})," communication within the global clusters scope."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Multi-Mode Support"}),": When join clusters, you can choose ",(0,n.jsx)(s.code,{children:"P2P"})," or ",(0,n.jsx)(s.code,{children:"Gateway"})," mode. The P2P model provides a second-layer network interconnection at the overlay level, offering shorter network paths and superior performance. When selecting the ",(0,n.jsx)(s.code,{children:"Gateway"})," mode, it demonstrates superior compatibility, which is well-suited for hybrid and multi-cloud scenarios."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Support for Global IP Allocation"}),": ClusterLink allows for the presence of two or more clusters within the global clusters to use the same ",(0,n.jsx)(s.code,{children:"Pod/Service"})," network segments, making it convenient for users to manage subnet. ClusterLink supports configuring the mapping relationship between ",(0,n.jsx)(s.code,{children:"PodCIDR/ServiceCIDR"})," and ",(0,n.jsx)(s.code,{children:"GlobalCIDR"}),". ",(0,n.jsx)(s.code,{children:"GlobalIP"})," is globally unique, enabling cross-cluster communication for services with conflicting network segments through ",(0,n.jsx)(s.code,{children:"GlobalIP"}),"."]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"IPv6/IPv4 Dual-Stack Support"})}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"network-architecture",children:"Network Architecture"}),"\n",(0,n.jsxs)(s.p,{children:["The Kosmos ClusterLink module currently includes the following key components:\r\n",(0,n.jsx)(s.img,{alt:"ClusterLink_Architecture.png",src:t(6152).c+"",width:"2000",height:"1066"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Controller-Manager"}),"\uff1aCollect network information of the current cluster and monitors changes in network settings."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Network-manager"}),"\uff1aCalculates the network configurations required for each node."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Agent"}),"\uff1aA DaemonSet used for configuring the host network, including tasks such as tunnel creation, routing, NAT, and so on."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Multi-Cluster-Coredns"}),"\uff1aImplements multi-cluster service discovery."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Elector"}),"\uff1aElects the gateway node."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"clustertree",children:"ClusterTree"}),"\n",(0,n.jsxs)(s.p,{children:["The Kosmos clustertree module realizes the tree-like scaling of Kubernetes and achieves cross-cluster orchestration of applications.This is the technological foundation for Kosmos to achieve boundless of Kubernetes.\r\n",(0,n.jsx)(s.img,{alt:"ClusterTree_Architecture.png",src:t(452).c+"",width:"1920",height:"1496"})]}),"\n",(0,n.jsx)(s.p,{children:"Currently, it primarily supports the following ability:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Full Compatibility with k8s API"}),": Users can interact with the host cluster's ",(0,n.jsx)(s.code,{children:"kube-apiserver"})," using tools like ",(0,n.jsx)(s.code,{children:"kubectl"}),", ",(0,n.jsx)(s.code,{children:"client-go"}),", and others just like they normally would. However, the ",(0,n.jsx)(s.code,{children:"Pods"})," are actually distributed across the entire multi-cloud, multi-cluster environment."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Support for Stateful and k8s-native Applications"}),": In addition to stateless applications, Kosmos also facilitates the orchestration of stateful applications and k8s-native applications (interacting with ",(0,n.jsx)(s.code,{children:"kube-apiserver"}),"). Kosmos will automatically detect the storage and permission resources that ",(0,n.jsx)(s.code,{children:"Pods"})," depend on, such as pv/pvc, sa, etc., and perform bidirectional synchronization between control plane clusters and data plane clusters."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Diverse Pod Topology Constraints"}),": Users can easily control the distribution of Pods within the global clusters, such as by region, availability zone, cluster, or node. This helps achieve high availability and improve resource utilization."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"scheduler",children:"Scheduler"}),"\n",(0,n.jsx)(s.p,{children:"The Kosmos scheduling module is an extension developed on top of the Kubernetes scheduling framework, aiming to meet the container management needs in mixed-node and sub-cluster environments. It provides the following core features to enhance the flexibility and efficiency of container management:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Flexible Node and Cluster Hybrid Scheduling"}),": The Kosmos scheduling module allows users to intelligently schedule workloads between real nodes and sub-clusters based on custom configurations. This enables users to make optimal use of resources across different nodes, ensuring the best performance and availability of workloads. Based on this capability, Kosmos enables workloads to achieve flexible cross-cloud and cross-cluster deployments."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Fine-grained Container Distribution Strategy"}),": By introducing Custom Resource Definitions (CRD), users can exert precise control over the distribution of workloads. The configuration of CRD allows users to explicitly specify the number of pods for the workload in different clusters and adjust the distribution ratio as needed."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Fine-grained Fragmented Resource Handling"}),": The Kosmos scheduling module intelligently detects fragmented resources within sub-clusters, effectively avoiding situations where pod deployment encounters insufficient resources in the sub-cluster. This helps ensure a more balanced allocation of resources across different nodes, enhancing system stability and performance."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Whether building a hybrid cloud environment or requiring flexible deployment of workloads across different clusters, the Kosmos scheduling module serves as a reliable solution, assisting users in managing containerized applications more efficiently."}),"\n",(0,n.jsx)(s.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Start to ",(0,n.jsx)(s.a,{href:"https://kosmos-io.github.io/website/v0.2.0/quick-start",children:"install Kosmos"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Learn Kosmos's ",(0,n.jsx)(s.a,{href:"https://kosmos-io.github.io/website/v0.2.0/tutorials/mcs-discovery",children:"tutorials"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Learn Kosmos's ",(0,n.jsx)(s.a,{href:"https://kosmos-io.github.io/website/v0.2.0/proposals/k8s-in-k8s",children:"proposals"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},6152:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/ClusterLink_Architecture-156348f81f4d7537d0c514541c0978c9.png"},452:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/ClusterTree_Architecture-ec1f02d3c150b9cc505a94e9e7b70abe.png"},2172:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>r});var n=t(1504);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);