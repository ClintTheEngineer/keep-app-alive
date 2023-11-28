declare module 'render-wake' {
    interface KeepAliveOptions {
      renderAppUrl?: string;
      pingInterval?: number;
    }
  
    function keepAlive(options?: KeepAliveOptions): void;
  
    export = keepAlive;
  }
  
  