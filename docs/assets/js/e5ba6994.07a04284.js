"use strict";(self.webpackChunkzfile_docs=self.webpackChunkzfile_docs||[]).push([[92],{8952:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var s=n(7624),o=n(2172);const t={id:"exe-and-log_zh",title:"Kosmos \u4e2d\u7684 EXEC \u548c Log \u8bbe\u8ba1"},c="Kosmos \u4e2d\u7684 EXEC \u548c Log \u8bbe\u8ba1",d={id:"i18n/zh/v0.2.0/exe-and-log_zh",title:"Kosmos \u4e2d\u7684 EXEC \u548c Log \u8bbe\u8ba1",description:"Kosmos \u7684 EXEC \u548c Log \u89e3\u51b3\u65b9\u6848",source:"@site/docs/i18n/zh/v0.2.0/design-of-exec-and-log_zh.md",sourceDirName:"i18n/zh/v0.2.0",slug:"/i18n/zh/v0.2.0/exe-and-log_zh",permalink:"/website/i18n/zh/v0.2.0/exe-and-log_zh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/i18n/zh/v0.2.0/design-of-exec-and-log_zh.md",tags:[],version:"current",lastUpdatedBy:"ONE7live",lastUpdatedAt:1718614714,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{id:"exe-and-log_zh",title:"Kosmos \u4e2d\u7684 EXEC \u548c Log \u8bbe\u8ba1"}},l={},i=[{value:"Kosmos \u7684 EXEC \u548c Log \u89e3\u51b3\u65b9\u6848",id:"kosmos-\u7684-exec-\u548c-log-\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u80cc\u666f\u77e5\u8bc6",id:"\u80cc\u666f\u77e5\u8bc6",level:3},{value:"\u5728 Kosmos \u4e2d\u7684\u5b9e\u73b0",id:"\u5728-kosmos-\u4e2d\u7684\u5b9e\u73b0",level:3},{value:"\u5b9a\u5236\u5316",id:"\u5b9a\u5236\u5316",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:3}];function a(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"kosmos-\u4e2d\u7684-exec-\u548c-log-\u8bbe\u8ba1",children:"Kosmos \u4e2d\u7684 EXEC \u548c Log \u8bbe\u8ba1"}),"\n",(0,s.jsx)(r.h2,{id:"kosmos-\u7684-exec-\u548c-log-\u89e3\u51b3\u65b9\u6848",children:"Kosmos \u7684 EXEC \u548c Log \u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(r.h3,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,s.jsxs)(r.p,{children:["\u5728 Kosmos \u4e2d\uff0c\u8c03\u5ea6\u5230 kosmos-node \u7684 pod \u4e5f\u652f\u6301 ",(0,s.jsx)(r.code,{children:"kubectl exec"})," \u548c ",(0,s.jsx)(r.code,{children:"kubectl log"})," \u529f\u80fd\u3002\r\n\u7531\u4e8e ",(0,s.jsx)(r.code,{children:"kubectl exec"})," \u548c ",(0,s.jsx)(r.code,{children:"kubectl log"})," \u7684\u6574\u4f53\u67b6\u6784\u662f\u76f8\u540c\u7684\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"kubectl exec"})," \u4f5c\u4e3a\u793a\u4f8b\u6765\u4ecb\u7ecd\u6574\u4f53\u67b6\u6784\u3002\r\n\u4e0b\u56fe\u5c55\u793a\u4e86\u6574\u4f53\u8bbe\u8ba1\u67b6\u6784\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"EXE Log_Arch.png",src:n(3992).c+"",width:"1110",height:"863"})}),"\n",(0,s.jsx)(r.h3,{id:"\u80cc\u666f\u77e5\u8bc6",children:"\u80cc\u666f\u77e5\u8bc6"}),"\n",(0,s.jsxs)(r.p,{children:["\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u63a2\u8ba8\u5728 Kubernetes \u4e2d\u5982\u4f55\u5b9e\u73b0 ",(0,s.jsx)(r.code,{children:"kubectl exec"}),"\u3002\r\n\u67b6\u6784\u56fe\u4e2d\u7684 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"leaf-cluster"})})," \u90e8\u5206\u662f\u539f\u751f\u96c6\u7fa4\u7684 ",(0,s.jsx)(r.code,{children:"kubectl exec"})," \u529f\u80fd\u7684\u4ee3\u8868\u3002\r\n\u7528\u6237\u53d1\u8d77\u7684 kubectl exec \u8bf7\u6c42\u7531 apiserver \u5904\u7406\u3002\r\napiserver \u5728\u63a5\u6536\u5230 exec \u8bf7\u6c42\u540e\uff0c\u9700\u8981\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230 pod \u6240\u5728\u7684\u8282\u70b9\uff0c\u56e0\u6b64\u9700\u8981\u67e5\u8be2\u5206\u914d\u4e86 pod \u7684\u8282\u70b9\u4fe1\u606f\u3002\r\n\u5728 Kubernetes \u6e90\u4ee3\u7801\u4e2d\uff0capiserver \u4f1a\u8c03\u7528 ",(0,s.jsx)(r.code,{children:"ExecLocation"})," \u65b9\u6cd5\u4ee5\u83b7\u53d6 pod \u7684 exec url\u3002\r\n\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:'// ExecLocation \u8fd4\u56de pod \u5bb9\u5668\u7684 exec URL\r\n// \u5982\u679c opts.Container \u4e3a\u7a7a\u4e14 pod \u4e2d\u53ea\u6709\u4e00\u4e2a\u5bb9\u5668, \u5219\u4f7f\u7528\u8be5\u5bb9\u5668\r\nfunc ExecLocation(\r\n    ctx context.Context,\r\n    getter ResourceGetter,\r\n    connInfo client.ConnectionInfoGetter,\r\n    name string,\r\n    opts *api.PodExecOptions,\r\n) (*url.URL, http.RoundTripper, error) {\r\n    return streamLocation(ctx, getter, connInfo, name, opts, opts.Container, "exec")\r\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"ExecLocation"})," \u8c03\u7528\u4e86 ",(0,s.jsx)(r.code,{children:"streamLocation"})," \u65b9\u6cd5\uff0cstreamLocation \u901a\u8fc7 pod \u540d\u79f0\u83b7\u53d6 pod \u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:'func streamLocation(\r\n    ctx context.Context,\r\n    getter ResourceGetter,\r\n    connInfo client.ConnectionInfoGetter,\r\n    name string,\r\n    opts runtime.Object,\r\n    container,\r\n    path string,\r\n) (*url.URL, http.RoundTripper, error) {\r\n    pod, err := getPod(ctx, getter, name)\r\n    if err != nil {\r\n        return nil, nil, err\r\n    }\r\n \r\n    // \u5c1d\u8bd5\u786e\u5b9a\u4e00\u4e2a\u5bb9\u5668\r\n    // \u5982\u679c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5bb9\u5668, \u5219\u5b83\u5fc5\u987b\u662f\u6709\u6548\u7684\r\n    container, err = validateContainer(container, pod)\r\n    if err != nil {\r\n        return nil, nil, err\r\n    }\r\n \r\n    nodeName := types.NodeName(pod.Spec.NodeName)\r\n    if len(nodeName) == 0 {\r\n        // \u5982\u679c pod \u5c1a\u672a\u5206\u914d\u4e3b\u673a, \u5219\u8fd4\u56de\u7a7a\u4f4d\u7f6e\r\n        return nil, nil, errors.NewBadRequest(fmt.Sprintf("pod %s \u5c1a\u672a\u5206\u914d\u4e3b\u673a", name))\r\n    }\r\n    nodeInfo, err := connInfo.GetConnectionInfo(ctx, nodeName)\r\n    if err != nil {\r\n        return nil, nil, err\r\n    }\r\n    params := url.Values{}\r\n    if err := streamParams(params, opts); err != nil {\r\n        return nil, nil, err\r\n    }\r\n    loc := &url.URL{\r\n        Scheme:   nodeInfo.Scheme,\r\n        Host:     net.JoinHostPort(nodeInfo.Hostname, nodeInfo.Port),\r\n        Path:     fmt.Sprintf("/%s/%s/%s/%s", path, pod.Namespace, pod.Name, container),\r\n        RawQuery: params.Encode(),\r\n    }\r\n    return loc, nodeInfo.Transport, nil\r\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u7136\u540e\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"pod.Spec.NodeName"})," \u83b7\u53d6\u5206\u914d pod \u7684\u8282\u70b9\u540d\u79f0\uff0c\u518d\u8c03\u7528\u4e00\u4e2a\u5173\u952e\u65b9\u6cd5 ",(0,s.jsx)(r.code,{children:"GetConnectionInfo"}),"\u3002\r\n\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:"// GetConnectionInfo \u4ece Node API \u5bf9\u8c61\u7684\u72b6\u6001\u4e2d\u68c0\u7d22\u8fde\u63a5\u4fe1\u606f\r\nfunc (k *NodeConnectionInfoGetter) GetConnectionInfo(ctx context.Context, nodeName types.NodeName) (*ConnectionInfo, error) {\r\n    node, err := k.nodes.Get(ctx, string(nodeName), metav1.GetOptions{})\r\n    if err != nil {\r\n        return nil, err\r\n    }\r\n \r\n    // \u67e5\u627e kubelet \u62a5\u544a\u7684\u5730\u5740, \u4f7f\u7528\u9996\u9009\u5730\u5740\u7c7b\u578b\r\n    host, err := nodeutil.GetPreferredNodeAddress(node, k.preferredAddressTypes)\r\n    if err != nil {\r\n        return nil, err\r\n    }\r\n \r\n    // \u4f7f\u7528 kubelet \u62a5\u544a\u7684\u7aef\u53e3, \u5982\u679c\u5b58\u5728\r\n    port := int(node.Status.DaemonEndpoints.KubeletEndpoint.Port)\r\n    if port <= 0 {\r\n        port = k.defaultPort\r\n    }\r\n \r\n    return &ConnectionInfo{\r\n        Scheme:                         k.scheme,\r\n        Hostname:                       host,\r\n        Port:                           strconv.Itoa(port),\r\n        Transport:                      k.transport,\r\n        InsecureSkipTLSVerifyTransport: k.insecureSkipTLSVerifyTransport,\r\n    }, nil\r\n}\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"GetConnectionInfo"})," \u901a\u8fc7\u8282\u70b9\u540d\u79f0\u83b7\u53d6\u8282\u70b9\u4fe1\u606f\uff0c\u7136\u540e\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"GetPreferredNodeAddress"})," \u9009\u62e9\u4e00\u4e2a\u5408\u9002\u7684\u4e3b\u673a\uff0c\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"streamLocation"})," \u5904\u7406\u540e\uff0c\u62fc\u63a5\u4e00\u4e2a exec \u8bf7\u6c42 URL\u3002\r\napiserver \u5c06\u77e5\u9053\u5e94\u5c06 exec \u8bf7\u6c42\u8f6c\u53d1\u5230\u54ea\u4e2a\u8282\u70b9\u3002\r\n\u8fd0\u884c\u5728\u8282\u70b9\u4e0a\u7684 kubelet \u670d\u52a1\u5c06\u6355\u83b7 exec \u8bf7\u6c42\uff0c\u7136\u540e\u4e0e pod \u5efa\u7acb\u94fe\u63a5\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u4ee5\u4e0a\u7b80\u8981\u4ecb\u7ecd\u4e86\u5efa\u7acb kubectl exec \u7684\u8fc7\u7a0b\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u5728-kosmos-\u4e2d\u7684\u5b9e\u73b0",children:"\u5728 Kosmos \u4e2d\u7684\u5b9e\u73b0"}),"\n",(0,s.jsxs)(r.p,{children:["\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u6574\u4f53\u67b6\u6784\u56fe\u4e2d\u7684 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"root-cluster"})}),"\u3002\r\n\u4e3a\u4e86\u5c06 exec \u8bf7\u6c42\u4f20\u9012\u5230 leaf \u96c6\u7fa4\uff0c\u9700\u8981\u5bf9 exec \u8bf7\u6c42\u8fdb\u884c\u8f6c\u53d1\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9 apiserver\uff0ckosmos-node \u7684 IP \u5730\u5740\u662f ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u7684 podIP\uff0c\u8fd9\u5c06\u5bfc\u81f4 apiserver \u5c06 exec \u8bf7\u6c42\u8f6c\u53d1\u5230 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})}),"\u3002\r\n\u5f53\u6211\u4eec\u540c\u6b65 kosmos-node \u7684\u8282\u70b9\u4fe1\u606f\u65f6\uff0c\u6211\u4eec\u4ece\u73af\u5883\u53d8\u91cf ",(0,s.jsx)(r.code,{children:"LEAF_NODE_IP"})," \u4e2d\u8bfb\u53d6\u8be5\u4fe1\u606f\u3002\r\n\u542f\u52a8 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u670d\u52a1\u65f6\u914d\u7f6e\u4e86\u6b64\u73af\u5883\u53d8\u91cf\u3002\r\n\u5173\u952e\u914d\u7f6e\u7247\u6bb5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:"spec:\r\n   serviceAccountName: clustertree\r\n   containers:\r\n     - name: clustertree-cluster-manager\r\n       image: ghcr.io/kosmos-io/clustertree-cluster-manager:__VERSION__\r\n       imagePullPolicy: IfNotPresent\r\n       env:\r\n         - name: APISERVER_CERT_LOCATION\r\n           value: /etc/cluster-tree/cert/cert.pem\r\n         - name: APISERVER_KEY_LOCATION\r\n           value: /etc/cluster-tree/cert/key.pem\r\n         - name: LEAF_NODE_IP\r\n           valueFrom:\r\n             fieldRef:\r\n               fieldPath: status.podIP\r\n         - name: PREFERRED-ADDRESS-TYPE\r\n           value: InternalDNS\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u7136\u540e\u6211\u4eec\u9700\u8981\u542f\u52a8\u4e00\u4e2a\u7c7b\u4f3c\u4e8e kubelet \u7684\u670d\u52a1\u6765\u76d1\u542c exec\u3002\r\n\u5728 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u670d\u52a1\u4e2d\uff0c\u6211\u4eec\u542f\u52a8\u4e86\u4e00\u4e2a nodeserver \u670d\u52a1\u3002\r\n\u4ee3\u7801\u7247\u6bb5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:'nodeServer := nodeserver.NodeServer{\r\n    RootClient:        mgr.GetClient(),\r\n    GlobalLeafManager: globalleafManager,\r\n}\r\ngo func() {\r\n    if err := nodeServer.Start(ctx, opts); err != nil {\r\n        klog.Errorf("failed to start node server: %v", err)\r\n    }\r\n}()\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u6b64\u670d\u52a1\u76d1\u89c6 exec \u548c log \u8bf7\u6c42\uff0c\u5e76\u5c06\u76d1\u89c6\u5230\u7684\u8bf7\u6c42\u4ee3\u7406\u8f6c\u53d1\u5230\u76f8\u5e94\u7684 leaf \u96c6\u7fa4\u3002\r\n\u6e90\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:'func (s *NodeServer) AttachRoutes(m *http.ServeMux) {\r\n    r := mux.NewRouter()\r\n    r.StrictSlash(true)\r\n \r\n    r.HandleFunc(\r\n        "/containerLogs/{namespace}/{pod}/{container}",\r\n        api.ContainerLogsHandler(s.getClient),\r\n    ).Methods("GET")\r\n \r\n    r.HandleFunc(\r\n        "/exec/{namespace}/{pod}/{container}",\r\n        api.ContainerExecHandler(\r\n            api.ContainerExecOptions{\r\n                StreamIdleTimeout:     30 * time.Second,\r\n                StreamCreationTimeout: 30 * time.Second,\r\n            },\r\n            s.getClient,\r\n        ),\r\n    ).Methods("POST", "GET")\r\n \r\n    r.NotFoundHandler = http.HandlerFunc(api.NotFound)\r\n \r\n    m.Handle("/", r)\r\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5b8c\u6210\u8f6c\u53d1\u90e8\u5206\u540e\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6839\u96c6\u7fa4\u4e2d\u7684 API server \u8bc6\u522b kosmos-node \u7684\u901a\u4fe1\u5730\u5740\u4e3a ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u670d\u52a1\u7684\u5730\u5740\u3002\r\n\u56e0\u6b64\uff0c\u5728\u7ef4\u62a4 kosmos-node \u7684\u72b6\u6001\u65f6\uff0c\u6211\u4eec\u5c06 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u7684 podIP \u540c\u6b65\u5230 kosmos-node\u3002\r\n\u5b8c\u6574\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u7528\u6237\u53d1\u8d77 exec \u8bf7\u6c42\u3002"}),"\n",(0,s.jsx)(r.li,{children:"\u6839\u96c6\u7fa4\u4e2d\u7684 API server \u63a5\u6536\u5230 exec \u8bf7\u6c42\uff0c\u5e76\u6839\u636e pod \u4fe1\u606f\u67e5\u8be2\u8282\u70b9\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(r.li,{children:["\u67e5\u8be2\u5230\u7684\u8282\u70b9\u4e3b\u673a\u662f ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u7684 podIP\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6839\u96c6\u7fa4\u4e2d\u7684 API server \u4e0e ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u5efa\u7acb exec \u8fde\u63a5\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u63a5\u6536\u5230 exec \u8fde\u63a5\u8bf7\u6c42\uff0c\u67e5\u8be2 pod \u4fe1\u606f\uff0c\u5e76\u5c06 exec \u8bf7\u6c42\u4ee3\u7406\u5230 leaf \u96c6\u7fa4\u3002\r\n\u901a\u8fc7\u8fd9\u4e2a\u8fc7\u7a0b\uff0cKosmos \u5b9e\u73b0\u4e86 exec \u529f\u80fd\uff0clog \u529f\u80fd\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e5f\u662f\u76f8\u540c\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u5b9a\u5236\u5316",children:"\u5b9a\u5236\u5316"}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u4e0e es \u4ea7\u54c1\u5bf9\u63a5\u65f6\uff0c\u6709\u4e00\u4e2a\u5b9a\u5236\u5316\u9700\u6c42\u3002\r\n\u4e0a\u8ff0\u8bbe\u8ba1\u5c06\u5bfc\u81f4\u6240\u6709 kosmos-node \u7684 IP \u90fd\u662f ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u7684 podIP\u3002\r\n\u5728 es \u7684\u4ea7\u54c1\u8bbe\u8ba1\u4e2d\uff0cnodeIP \u7528\u4f5c\u4e3b\u952e\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u4ea7\u54c1\u65e0\u6cd5\u5b58\u50a8\u5230\u4ed3\u5e93\u4e2d\u3002\u4e3a\u6b64\uff0ckosmos \u8fdb\u884c\u4e86\u7279\u6b8a\u8bbe\u8ba1\u3002\r\n\u5728\u901a\u8fc7 kubectl get node -owide \u83b7\u53d6\u7684\u8282\u70b9\u4fe1\u606f\u4e2d\uff0cip \u5730\u5740\u5c5e\u4e8e InternalIP \u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"sudo kubectl get nodes -owide\r\nNAME                STATUS   ROLES                          AGE     VERSION     INTERNAL-IP\r\n\r\n     EXTERNAL-IP   OS-IMAGE                                        KERNEL-VERSION                                CONTAINER-RUNTIME\r\nkosmos-control-1    Ready    control-plane,master,node      65d     v1.21.5     192.xx.xx.1     <none>        BigCloud Enterprise Linux For Euler 21.10 LTS   4.19.90-2107.6.0.0192.8.oe1.bclinux.x86_64    containerd://1.5.7\r\nkosmos-control-2    Ready    node                           65d     v1.21.5     192.xx.xx.2     <none>        BigCloud Enterprise Linux For Euler 21.10 LTS   4.19.90-2107.6.0.0192.8.oe1.bclinux.x86_64    containerd://1.5.7\r\nkosmos-cluster1     Ready    agent                          20d     v1.21.5     192.xx.xx.3     <none>\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u67e5\u8be2\u8282\u70b9\u4e3b\u673a\u65f6\uff0c\u4e0a\u6587\u63d0\u5230\u7684 GetPreferredNodeAddress \u51fd\u6570\u5c06\u6839\u636e\u4f18\u5148\u7ea7\u4ece Address \u5217\u8868\u4e2d\u9009\u62e9\u4e00\u4e2a\uff0c\u56e0\u6b64\u5728 es \u4e2d\uff0c\u6211\u4eec\u5c06 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u7684 podIP \u8bbe\u7f6e\u4e3a\u6bd4 InternalIP \u7c7b\u522b\u5730\u5740\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u53ef\u4ee5\u6307\u5b9a ip \u7684\u7c7b\u578b\u548c\u503c\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:'func GetAddress(ctx context.Context, rootClient kubernetes.Interface, originAddress []corev1.NodeAddress) ([]corev1.NodeAddress, error) {\r\n    preferredAddressType := corev1.NodeAddressType(os.Getenv("PREFERRED-ADDRESS-TYPE"))\r\n \r\n    if len(preferredAddressType) == 0 {\r\n        preferredAddressType = corev1.NodeInternalDNS\r\n    }\r\n \r\n    prefixAddress := []corev1.NodeAddress{\r\n        {Type: preferredAddressType, Address: os.Getenv("LEAF_NODE_IP")},\r\n    }\r\n \r\n    address, err := SortAddress(ctx, rootClient, originAddress)\r\n \r\n    if err != nil {\r\n        return nil, err\r\n    }\r\n \r\n    return append(prefixAddress, address...), nil\r\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u4f55\u67e5\u770b\u5730\u5740\u4f18\u5148\u7ea7\uff1f\u901a\u8fc7\u67e5\u770b api-server \u7684\u542f\u52a8\u53c2\u6570 - kubelet-preferred-address-types\uff0c\u6b64\u5904\u8bbe\u7f6e\u4e86 GetPreferredNodeAddress \u51fd\u6570\u4ee5\u83b7\u53d6\u4e3b\u673a\u7684\u4f18\u5148\u7ea7\u3002\r\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cInternalDNS \u5177\u6709\u6700\u9ad8\u4f18\u5148\u7ea7\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",metastring:"script",children:"- --kubelet-preferred-address-types=InternalDNS,InternalIP,Hostname,ExternaLDNS,ExternalIP\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,s.jsxs)(r.p,{children:["\u5728 Kosmos \u4e2d\uff0c",(0,s.jsx)(r.code,{children:"kubectl exec"})," \u548c ",(0,s.jsx)(r.code,{children:"kubectl log"})," \u90fd\u901a\u8fc7 API server \u88ab\u201c\u6b3a\u9a97\u201d\u5e76\u91cd\u5b9a\u5411\u5230\u6211\u4eec\u81ea\u5df1\u7684 ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"clustertree-cluster-manager"})})," \u670d\u52a1\u3002\r\n\u8fd9\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u5b9e\u73b0\u5b9a\u5236\u5316\u529f\u80fd\u3002"]})]})}function x(e={}){const{wrapper:r}={...(0,o.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3992:(e,r,n)=>{n.d(r,{c:()=>s});const s=n.p+"assets/images/EXEC_Log_Arch-55169f06d1b0071b36b0ddb300a3e3fd.png"},2172:(e,r,n)=>{n.d(r,{I:()=>d,M:()=>c});var s=n(1504);const o={},t=s.createContext(o);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);