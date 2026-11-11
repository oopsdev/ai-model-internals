// MathJax 設定（需在 MathJax 腳本之前載入）。
// body 標 mathjax_ignore、正文容器標 mathjax_process：只掃描正文，略過導覽區。
window.MathJax = {
  tex: { inlineMath: [['$', '$']], displayMath: [['$$', '$$']] },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreHtmlClass: 'mathjax_ignore',
    processHtmlClass: 'mathjax_process'
  }
};
