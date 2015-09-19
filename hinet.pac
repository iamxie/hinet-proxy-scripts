function FindProxyForURL(url, host){
    if ( dnsDomainIs( host, ".ximalaya.com") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else if ( dnsDomainIs( host, ".baidu.com") ) {
    	return "PROXY proxy.hinet.net:80; DIRECT";
    }else if ( dnsDomainIs( host, ".xmcdn.com") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else if ( shExpMatch(url, "*/*.baidupcs.*/*") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else if ( shExpMatch(url, "*/youku/*") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else if ( shExpMatch(url, "*fbcdn-video-*.akamaihd.net/*") ) {
        return "PROXY proxy.hinet.net:80; DIRECT";
    }else{
        return "DIRECT";
    }
} 