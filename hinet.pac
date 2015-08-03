function FindProxyForURL(url, host){
    if ( dnsDomainIs( host, ".ximalaya.com") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else if ( dnsDomainIs( host, ".xmcdn.com") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else if ( dnsDomainIs( host, ".akamaihd.net") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else{
        return "DIRECT";
    }
} 