(function(t) {
    function e(e) {
        for (var c, r, i = e[0], s = e[1], u = e[2], d = 0, b = []; d < i.length; d++)
            (r = i[d]), Object.prototype.hasOwnProperty.call(a, r) && a[r] && b.push(a[r][0]), (a[r] = 0);
        for (c in s) Object.prototype.hasOwnProperty.call(s, c) && (t[c] = s[c]);
        l && l(e);
        while (b.length) b.shift()();
        return o.push.apply(o, u || []), n();
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], c = !0, i = 1; i < n.length; i++) {
                var s = n[i];
                0 !== a[s] && (c = !1);
            }
            c && (o.splice(e--, 1), (t = r((r.s = n[0]))));
        }
        return t;
    }
    var c = {},
        a = { app: 0 },
        o = [];
    function r(e) {
        if (c[e]) return c[e].exports;
        var n = (c[e] = { i: e, l: !1, exports: {} });
        return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    (r.m = t),
        (r.c = c),
        (r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (r.r = function(t) {
            'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (r.t = function(t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
                for (var c in t)
                    r.d(
                        n,
                        c,
                        function(e) {
                            return t[e];
                        }.bind(null, c)
                    );
            return n;
        }),
        (r.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t['default'];
                      }
                    : function() {
                          return t;
                      };
            return r.d(e, 'a', e), e;
        }),
        (r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (r.p = '/');
    var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
        s = i.push.bind(i);
    (i.push = e), (i = i.slice());
    for (var u = 0; u < i.length; u++) e(i[u]);
    var l = s;
    o.push([0, 'chunk-vendors']), n();
})({
    0: function(t, e, n) {
        t.exports = n('56d7');
    },
    '0215': function(t, e, n) {},
    '048a': function(t, e, n) {
        'use strict';
        n('0df5');
    },
    '0dce': function(t, e, n) {
        'use strict';
        n('b388');
    },
    '0df5': function(t, e, n) {},
    1445: function(t, e, n) {
        t.exports = n.p + 'img/fftl-logo_basic.7b0247f4.png';
    },
    '25ec': function(t, e, n) {
        'use strict';
        n('a8cb');
    },
    2627: function(t, e, n) {
        'use strict';
        n('559a');
    },
    '36ec': function(t, e, n) {
        'use strict';
        n('d76a');
    },
    4068: function(t, e, n) {
        'use strict';
        n('979c');
    },
    '4bd4': function(t, e, n) {
        'use strict';
        n('7fe2');
    },
    '4f81': function(t, e, n) {
        'use strict';
        n('5e81');
    },
    5205: function(t, e, n) {},
    '559a': function(t, e, n) {},
    '56d7': function(t, e, n) {
        'use strict';
        n.r(e);
        n('e260'), n('e6cf'), n('cca6'), n('a79d');
        var c = n('7a23'),
            a = n('f42c'),
            o = { class: 'wrapper' },
            r = { id: 'container' };
        function i(t, e, n, a, i, s) {
            var u = Object(c['w'])('Header'),
                l = Object(c['w'])('router-view'),
                d = Object(c['w'])('Footer');
            return (
                Object(c['p'])(),
                Object(c['d'])('div', o, [
                    Object(c['g'])(u),
                    Object(c['g'])('div', null, [Object(c['g'])('div', r, [Object(c['g'])(l)])]),
                    Object(c['g'])(d),
                ])
            );
        }
        var s = n('1445'),
            u = n.n(s),
            l = Object(c['D'])('data-v-ab582ea4');
        Object(c['s'])('data-v-ab582ea4');
        var d = { key: 0 },
            b = Object(c['g'])('img', { alt: 'Vue logo', src: u.a, width: '100' }, null, -1),
            p = { key: 1 },
            h = Object(c['g'])('img', { alt: 'Vue logo', src: u.a, width: '100' }, null, -1),
            g = { class: 'menuWrap' },
            j = { class: 'menu' },
            f = { key: 0 },
            O = Object(c['f'])('로그아웃');
        Object(c['q'])();
        var m = l(function(t, e, n, a, o, r) {
                var i = Object(c['w'])('router-link');
                return (
                    Object(c['p'])(),
                    Object(c['d'])('header', null, [
                        o.loginOk
                            ? (Object(c['p'])(),
                              Object(c['d'])('h1', d, [
                                  Object(c['g'])(
                                      i,
                                      { to: '/board/list' },
                                      {
                                          default: l(function() {
                                              return [b];
                                          }),
                                          _: 1,
                                      }
                                  ),
                              ]))
                            : (Object(c['p'])(),
                              Object(c['d'])('h1', p, [
                                  Object(c['g'])(
                                      i,
                                      { to: '/' },
                                      {
                                          default: l(function() {
                                              return [h];
                                          }),
                                          _: 1,
                                      }
                                  ),
                              ])),
                        Object(c['g'])('div', g, [
                            Object(c['g'])('ul', j, [
                                o.loginOk
                                    ? (Object(c['p'])(),
                                      Object(c['d'])('li', f, [
                                          Object(c['g'])(
                                              i,
                                              { to: '#', onClick: r.logout },
                                              {
                                                  default: l(function() {
                                                      return [O];
                                                  }),
                                                  _: 1,
                                              },
                                              8,
                                              ['onClick']
                                          ),
                                      ]))
                                    : Object(c['e'])('', !0),
                            ]),
                        ]),
                    ])
                );
            }),
            v = {
                data: function() {
                    return { loginOk: this.$store.state.loginCheck };
                },
                mounted: function() {},
                computed: {
                    check_loginCheck: function() {
                        return this.$store.state.loginCheck;
                    },
                },
                watch: {
                    check_loginCheck: function(t) {
                        this.loginOk = t;
                    },
                },
                methods: {
                    logout: function() {
                        this.$store.commit('resetState'),
                            this.$router.push({ path: '/' }),
                            (this.loginOk = !1),
                            alert('로그아웃 되었습니다.');
                    },
                },
            };
        n('048a');
        (v.render = m), (v.__scopeId = 'data-v-ab582ea4');
        var k = v,
            y = Object(c['D'])('data-v-355913cb');
        Object(c['s'])('data-v-355913cb');
        var C = { id: 'footer' },
            w = Object(c['g'])('p', { style: { 'margin-bottom': '0' } }, 'copyRight fftl.lee', -1);
        Object(c['q'])();
        var A = y(function(t, e, n, a, o, r) {
                return Object(c['p'])(), Object(c['d'])('div', C, [w]);
            }),
            $ = {};
        n('25ec');
        ($.render = A), ($.__scopeId = 'data-v-355913cb');
        var _ = $,
            x = { name: 'App', components: { Header: k, Footer: _ } };
        n('2627');
        x.render = i;
        var U = x,
            D = n('6c02'),
            L = Object(c['D'])('data-v-5bbf213f');
        Object(c['s'])('data-v-5bbf213f');
        var q = Object(c['g'])('h2', null, '게시판 리스트', -1);
        Object(c['q'])();
        var I = L(function(t, e, n, a, o, r) {
                var i = Object(c['w'])('PaginatedList');
                return (
                    Object(c['p'])(),
                    Object(c['d'])('div', null, [
                        q,
                        Object(c['g'])(
                            'button',
                            {
                                class: 'goWrite',
                                onClick:
                                    e[1] ||
                                    (e[1] = function() {
                                        return r.goWrite && r.goWrite.apply(r, arguments);
                                    }),
                            },
                            '글 작성'
                        ),
                        Object(c['g'])(i, { listArray: o.pageArray }, null, 8, ['listArray']),
                    ])
                );
            }),
            B = Object(c['g'])(
                'tr',
                null,
                [
                    Object(c['g'])('th', null, 'NO'),
                    Object(c['g'])('th', null, 'WRITER'),
                    Object(c['g'])('th', null, 'TITLE'),
                    Object(c['g'])('th', null, 'REGDATE'),
                ],
                -1
            ),
            V = { class: 'btn-cover' },
            W = { class: 'page-count' };
        function P(t, e, n, a, o, r) {
            return (
                Object(c['p'])(),
                Object(c['d'])('div', null, [
                    Object(c['g'])('table', null, [
                        B,
                        (Object(c['p'])(!0),
                        Object(c['d'])(
                            c['a'],
                            null,
                            Object(c['v'])(r.paginatedData, function(t) {
                                return (
                                    Object(c['p'])(),
                                    Object(c['d'])('tr', { key: t.bid }, [
                                        Object(c['g'])('td', null, Object(c['y'])(t.bid), 1),
                                        Object(c['g'])('td', null, Object(c['y'])(t.nickname), 1),
                                        Object(c['g'])('td', null, [
                                            Object(c['g'])(
                                                'a',
                                                {
                                                    href: 'javascript:;',
                                                    onClick: function(e) {
                                                        return r.goUpdate(''.concat(t.bid));
                                                    },
                                                },
                                                Object(c['y'])(t.title),
                                                9,
                                                ['onClick']
                                            ),
                                        ]),
                                        Object(c['g'])('td', null, Object(c['y'])(t.bregdate), 1),
                                    ])
                                );
                            }),
                            128
                        )),
                    ]),
                    Object(c['g'])('div', V, [
                        Object(c['g'])(
                            'button',
                            {
                                disabled: 0 === o.pageNum,
                                onClick:
                                    e[1] ||
                                    (e[1] = function() {
                                        return r.prevPage && r.prevPage.apply(r, arguments);
                                    }),
                                class: 'page-btn',
                            },
                            ' 이전 ',
                            8,
                            ['disabled']
                        ),
                        Object(c['g'])('span', W, Object(c['y'])(o.pageNum + 1) + ' / ' + Object(c['y'])(r.pageCount) + ' 페이지', 1),
                        Object(c['g'])(
                            'button',
                            {
                                disabled: o.pageNum >= r.pageCount - 1,
                                onClick:
                                    e[2] ||
                                    (e[2] = function() {
                                        return r.nextPage && r.nextPage.apply(r, arguments);
                                    }),
                                class: 'page-btn',
                            },
                            ' 다음 ',
                            8,
                            ['disabled']
                        ),
                    ]),
                ])
            );
        }
        n('a9e3'), n('fb6a');
        var N = {
            name: 'paginated-list',
            data: function() {
                return { pageNum: 0, bid: '' };
            },
            props: { listArray: { type: Array, required: !0 }, pageSize: { type: Number, required: !1, default: 10 } },
            methods: {
                nextPage: function() {
                    this.pageNum += 1;
                },
                prevPage: function() {
                    this.pageNum -= 1;
                },
                goUpdate: function(t) {
                    (this.bid = t), this.$router.push({ path: '/board/view/', query: { bid: this.bid } });
                },
            },
            computed: {
                pageCount: function() {
                    var t = this.listArray.length,
                        e = this.pageSize,
                        n = Math.floor(t / e);
                    return t % e > 0 && (n += 1), n;
                },
                paginatedData: function() {
                    var t = this.pageNum * this.pageSize,
                        e = t + this.pageSize;
                    return this.listArray.slice(t, e);
                },
            },
        };
        n('36ec');
        N.render = P;
        var z = N,
            S = {
                components: { PaginatedList: z },
                data: function() {
                    return { pageArray: [], header: [] };
                },
                mounted: function() {
                    this.loginCheck(), this.getList();
                },
                methods: {
                    loginCheck: function() {
                        '' == this.$store.state.token && (alert('잘못된 접근 입니다.'), this.$router.push({ path: '/' }));
                    },
                    getList: function() {
                        var t = this;
                        this.$http
                            .get('http://127.0.0.1:8080/board/', { headers: { Authorization: 'Bearer ' + this.$store.state.token } })
                            .then(function(e) {
                                console.log(e), e.data.boards ? (t.pageArray = e.data.boards) : (t.pageArray = e.data);
                            })
                            .then(function(t) {
                                console.log(t);
                            });
                    },
                    goWrite: function() {
                        this.$router.push({ path: './write' });
                    },
                    myInfo: function() {
                        var t = this;
                        this.$http
                            .get('http://localhost:8080/user/profile', { headers: { Authorization: 'Bearer ' + this.$store.state.token } })
                            .then(function(e) {
                                200 == e.status &&
                                    (console.log(e),
                                    t.$store.commit('setNickname', e.data.nickname),
                                    t.$store.commit('setUid', e.data.uid));
                            })
                            .catch(function(t) {
                                alert(t);
                            });
                    },
                },
            };
        n('4bd4');
        (S.render = I), (S.__scopeId = 'data-v-5bbf213f');
        var T = S,
            H = Object(c['D'])('data-v-46706373');
        Object(c['s'])('data-v-46706373');
        var M = Object(c['g'])('h1', null, '게시판 등록', -1),
            F = { class: 'AddWrap' },
            E = { class: 'tbAdd' },
            R = Object(c['g'])('colgroup', null, [Object(c['g'])('col', { width: '15%' }), Object(c['g'])('col', { width: '*' })], -1),
            J = Object(c['g'])('th', null, '제목', -1),
            Y = Object(c['g'])('th', null, '작성자', -1),
            G = Object(c['g'])('th', null, '내용', -1),
            X = { class: 'btnWrap' };
        Object(c['q'])();
        var K = H(function(t, e, n, a, o, r) {
                return (
                    Object(c['p'])(),
                    Object(c['d'])('div', null, [
                        M,
                        Object(c['g'])('div', F, [
                            Object(c['g'])('form', null, [
                                Object(c['g'])('table', E, [
                                    R,
                                    Object(c['g'])('tr', null, [
                                        J,
                                        Object(c['g'])('td', null, [
                                            Object(c['C'])(
                                                Object(c['g'])(
                                                    'input',
                                                    {
                                                        type: 'text',
                                                        'onUpdate:modelValue':
                                                            e[1] ||
                                                            (e[1] = function(t) {
                                                                return (o.title = t);
                                                            }),
                                                        ref: 'title',
                                                    },
                                                    null,
                                                    512
                                                ),
                                                [[c['A'], o.title]]
                                            ),
                                        ]),
                                    ]),
                                    Object(c['g'])('tr', null, [
                                        Y,
                                        Object(c['g'])('td', null, [
                                            Object(c['C'])(
                                                Object(c['g'])(
                                                    'input',
                                                    {
                                                        type: 'text',
                                                        'onUpdate:modelValue':
                                                            e[2] ||
                                                            (e[2] = function(t) {
                                                                return (o.nickname = t);
                                                            }),
                                                        ref: 'nickname',
                                                        readonly: 'readonly',
                                                    },
                                                    null,
                                                    512
                                                ),
                                                [[c['A'], o.nickname]]
                                            ),
                                        ]),
                                    ]),
                                    Object(c['g'])('tr', null, [
                                        G,
                                        Object(c['g'])('td', null, [
                                            Object(c['C'])(
                                                Object(c['g'])(
                                                    'textarea',
                                                    {
                                                        'onUpdate:modelValue':
                                                            e[3] ||
                                                            (e[3] = function(t) {
                                                                return (o.content = t);
                                                            }),
                                                        ref: 'content',
                                                    },
                                                    null,
                                                    512
                                                ),
                                                [[c['A'], o.content]]
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]),
                        Object(c['g'])('div', X, [
                            Object(c['g'])(
                                'a',
                                {
                                    href: 'javascript:;',
                                    onClick:
                                        e[4] ||
                                        (e[4] = function() {
                                            return r.goList && r.goList.apply(r, arguments);
                                        }),
                                    class: 'btn',
                                },
                                '목록'
                            ),
                            Object(c['g'])(
                                'a',
                                {
                                    href: 'javascript:;',
                                    onClick:
                                        e[5] ||
                                        (e[5] = function() {
                                            return r.addBoard && r.addBoard.apply(r, arguments);
                                        }),
                                    class: 'btnAdd btn',
                                },
                                '등록'
                            ),
                        ]),
                    ])
                );
            }),
            Q = new Date(),
            Z = Q.getFullYear(),
            tt = Q.getMonth() + 1,
            et = Q.getDate(),
            nt = Z + '-' + tt + '-' + et,
            ct = {
                data: function() {
                    return { title: '', nickname: '', content: '', form: '' };
                },
                mounted: function() {
                    this.nickname = this.$store.state.nickname;
                },
                methods: {
                    goList: function() {
                        this.$router.push({ path: '/board/list' });
                    },
                    addBoard: function() {
                        var t = this;
                        return this.title
                            ? this.content
                                ? ((this.form = {
                                      title: this.title,
                                      nickname: this.nickname,
                                      content: this.content,
                                      bregdate: nt,
                                      uid: this.$store.state.uid,
                                  }),
                                  alert(this.form),
                                  void this.$http
                                      .post('http://localhost:8080/board', this.form, {
                                          headers: { Authorization: 'Bearer ' + this.$store.state.token },
                                      })
                                      .then(function(e) {
                                          201 == e.status || 200 == e.status
                                              ? (alert('등록되었습니다.'), t.goList())
                                              : alert('실행 중 실패했습니다.\n다시 이용해 주세요');
                                      })
                                      .catch(function(t) {
                                          console.log(t);
                                      }))
                                : (alert('내용을 입력해 주세요'), void this.$refs.content.focus())
                            : (alert('제목을 입력해 주세요'), void this.$refs.title.focus());
                    },
                },
            };
        n('5f2e');
        (ct.render = K), (ct.__scopeId = 'data-v-46706373');
        var at = ct,
            ot = Object(c['D'])('data-v-98ea3bca');
        Object(c['s'])('data-v-98ea3bca');
        var rt = { id: 'view' },
            it = Object(c['g'])('h1', null, '게시판 상세보기', -1),
            st = { key: 0, class: 'AddWrap' },
            ut = { class: 'tbAdd' },
            lt = Object(c['g'])('colgroup', null, [Object(c['g'])('col', { width: '15%' }), Object(c['g'])('col', { width: '*' })], -1),
            dt = Object(c['g'])('th', null, '제목', -1),
            bt = Object(c['g'])('th', null, '작성자', -1),
            pt = Object(c['g'])('th', null, '날짜', -1),
            ht = Object(c['g'])('th', null, '내용', -1),
            gt = { key: 1, class: 'AddWrap' },
            jt = { class: 'tbAdd' },
            ft = Object(c['g'])('colgroup', null, [Object(c['g'])('col', { width: '15%' }), Object(c['g'])('col', { width: '*' })], -1),
            Ot = Object(c['g'])('th', null, '제목', -1),
            mt = Object(c['g'])('th', null, '작성자', -1),
            vt = Object(c['g'])('th', null, '날짜', -1),
            kt = Object(c['g'])('th', null, '내용', -1),
            yt = { key: 2, class: 'btnWrap' },
            Ct = { key: 3, class: 'btnWrap' };
        Object(c['q'])();
        var wt = ot(function(t, e, n, a, o, r) {
                var i = Object(c['w'])('Comments');
                return (
                    Object(c['p'])(),
                    Object(c['d'])('div', rt, [
                        it,
                        o.uCheck
                            ? (Object(c['p'])(),
                              Object(c['d'])('div', st, [
                                  Object(c['g'])('form', null, [
                                      Object(c['g'])('table', ut, [
                                          lt,
                                          Object(c['g'])('tr', null, [
                                              dt,
                                              Object(c['g'])('td', null, [
                                                  Object(c['C'])(
                                                      Object(c['g'])(
                                                          'input',
                                                          {
                                                              type: 'text',
                                                              'onUpdate:modelValue':
                                                                  e[1] ||
                                                                  (e[1] = function(t) {
                                                                      return (o.title = t);
                                                                  }),
                                                              ref: 'title',
                                                          },
                                                          null,
                                                          512
                                                      ),
                                                      [[c['A'], o.title]]
                                                  ),
                                              ]),
                                          ]),
                                          Object(c['g'])('tr', null, [
                                              bt,
                                              Object(c['g'])('td', null, [
                                                  Object(c['C'])(
                                                      Object(c['g'])(
                                                          'input',
                                                          {
                                                              type: 'text',
                                                              'onUpdate:modelValue':
                                                                  e[2] ||
                                                                  (e[2] = function(t) {
                                                                      return (o.nickname = t);
                                                                  }),
                                                              ref: 'nickname',
                                                              readonly: 'readonly',
                                                          },
                                                          null,
                                                          512
                                                      ),
                                                      [[c['A'], o.nickname]]
                                                  ),
                                              ]),
                                          ]),
                                          Object(c['g'])('tr', null, [
                                              pt,
                                              Object(c['g'])('td', null, [
                                                  Object(c['C'])(
                                                      Object(c['g'])(
                                                          'input',
                                                          {
                                                              type: 'text',
                                                              'onUpdate:modelValue':
                                                                  e[3] ||
                                                                  (e[3] = function(t) {
                                                                      return (o.bregdate = t);
                                                                  }),
                                                              ref: 'bregdate',
                                                              readonly: 'readonly',
                                                          },
                                                          null,
                                                          512
                                                      ),
                                                      [[c['A'], o.bregdate]]
                                                  ),
                                              ]),
                                          ]),
                                          Object(c['g'])('tr', null, [
                                              ht,
                                              Object(c['g'])('td', null, [
                                                  Object(c['C'])(
                                                      Object(c['g'])(
                                                          'textarea',
                                                          {
                                                              'onUpdate:modelValue':
                                                                  e[4] ||
                                                                  (e[4] = function(t) {
                                                                      return (o.content = t);
                                                                  }),
                                                              ref: 'content',
                                                          },
                                                          null,
                                                          512
                                                      ),
                                                      [[c['A'], o.content]]
                                                  ),
                                              ]),
                                          ]),
                                      ]),
                                  ]),
                              ]))
                            : (Object(c['p'])(),
                              Object(c['d'])('div', gt, [
                                  Object(c['g'])('form', null, [
                                      Object(c['g'])('table', jt, [
                                          ft,
                                          Object(c['g'])('tr', null, [Ot, Object(c['g'])('td', null, Object(c['y'])(o.title), 1)]),
                                          Object(c['g'])('tr', null, [mt, Object(c['g'])('td', null, Object(c['y'])(o.nickname), 1)]),
                                          Object(c['g'])('tr', null, [vt, Object(c['g'])('td', null, Object(c['y'])(o.bregdate), 1)]),
                                          Object(c['g'])('tr', null, [
                                              kt,
                                              Object(c['g'])('td', { class: 'txt_cont', innerHTML: o.content }, null, 8, ['innerHTML']),
                                          ]),
                                      ]),
                                  ]),
                              ])),
                        o.uCheck
                            ? (Object(c['p'])(),
                              Object(c['d'])('div', yt, [
                                  Object(c['g'])(
                                      'a',
                                      {
                                          href: 'javascript:;',
                                          onClick:
                                              e[5] ||
                                              (e[5] = function() {
                                                  return r.goList && r.goList.apply(r, arguments);
                                              }),
                                          class: 'btn',
                                      },
                                      '목록'
                                  ),
                                  Object(c['g'])(
                                      'a',
                                      {
                                          href: 'javascript:;',
                                          onClick:
                                              e[6] ||
                                              (e[6] = function() {
                                                  return r.boardUpdate && r.boardUpdate.apply(r, arguments);
                                              }),
                                          class: 'btnAdd btn',
                                      },
                                      '수정'
                                  ),
                                  Object(c['g'])(
                                      'a',
                                      {
                                          href: 'javascript:;',
                                          onClick:
                                              e[7] ||
                                              (e[7] = function() {
                                                  return r.boardDelete && r.boardDelete.apply(r, arguments);
                                              }),
                                          class: 'btnAdd btn',
                                      },
                                      '삭제'
                                  ),
                              ]))
                            : (Object(c['p'])(),
                              Object(c['d'])('div', Ct, [
                                  Object(c['g'])(
                                      'a',
                                      {
                                          href: 'javascript:;',
                                          onClick:
                                              e[8] ||
                                              (e[8] = function() {
                                                  return r.goList && r.goList.apply(r, arguments);
                                              }),
                                          class: 'btn',
                                      },
                                      '목록'
                                  ),
                              ])),
                        Object(c['g'])(i, { commentsArray: o.comments }, null, 8, ['commentsArray']),
                    ])
                );
            }),
            At = (n('5319'), n('ac1f'), Object(c['D'])('data-v-29e3bbaa'));
        Object(c['s'])('data-v-29e3bbaa');
        var $t = { id: 'comments' },
            _t = { class: 'comments' },
            xt = { class: 'nickname' },
            Ut = { class: 'comment' },
            Dt = { class: 'cregdate' },
            Lt = Object(c['g'])('td', null, [Object(c['g'])('button', { class: 'delete' }, 'X')], -1);
        Object(c['q'])();
        var qt = At(function(t, e, n, a, o, r) {
                return (
                    Object(c['p'])(),
                    Object(c['d'])('div', $t, [
                        Object(c['g'])('p', null, [
                            Object(c['g'])('span', null, Object(c['y'])(o.nickname) + ' : ', 1),
                            Object(c['C'])(
                                Object(c['g'])(
                                    'input',
                                    {
                                        id: 'inputComment',
                                        type: 'text',
                                        'onUpdate:modelValue':
                                            e[1] ||
                                            (e[1] = function(t) {
                                                return (o.comment = t);
                                            }),
                                        ref: 'comment',
                                    },
                                    null,
                                    512
                                ),
                                [[c['A'], o.comment]]
                            ),
                            Object(c['g'])(
                                'button',
                                {
                                    onClick:
                                        e[2] ||
                                        (e[2] = function() {
                                            return r.addComment && r.addComment.apply(r, arguments);
                                        }),
                                },
                                '입력'
                            ),
                        ]),
                        Object(c['g'])('table', _t, [
                            (Object(c['p'])(!0),
                            Object(c['d'])(
                                c['a'],
                                null,
                                Object(c['v'])(r.comments, function(t) {
                                    return (
                                        Object(c['p'])(),
                                        Object(c['d'])('tr', { key: t.cid }, [
                                            Object(c['g'])('td', xt, Object(c['y'])(t.nickname), 1),
                                            Object(c['g'])('td', Ut, Object(c['y'])(t.comment), 1),
                                            Object(c['g'])('td', Dt, Object(c['y'])(t.cregdate), 1),
                                            Lt,
                                        ])
                                    );
                                }),
                                128
                            )),
                        ]),
                    ])
                );
            }),
            It = new Date(),
            Bt = It.getFullYear(),
            Vt = It.getMonth() + 1,
            Wt = It.getDate(),
            Pt = Bt + '-' + Vt + '-' + Wt,
            Nt = {
                data: function() {
                    return { nickname: '', comment: '', bid: this.$route.query.bid, form: '' };
                },
                mounted: function() {
                    this.nickname = this.$store.state.nickname;
                },
                props: { commentsArray: Array },
                methods: {
                    addComment: function() {
                        var t = this;
                        (this.form = {
                            nickname: this.nickname,
                            comment: this.comment,
                            cregdate: Pt,
                            uid: this.$store.state.uid,
                            bid: this.$route.query.bid,
                        }),
                            this.$http
                                .post('http://localhost:8080/comment/', this.form, {
                                    headers: { Authorization: 'Bearer ' + this.$store.state.token },
                                })
                                .then(function(e) {
                                    console.log(e),
                                        alert('댓글이 등록되었습니다.'),
                                        t.$router.push({ redirect: '/board/view/', query: { bid: t.bid } }),
                                        console.log('Test');
                                })
                                .catch(function(t) {
                                    console.log(t);
                                });
                    },
                },
                computed: {
                    comments: function() {
                        return this.commentsArray;
                    },
                },
            };
        n('4f81');
        (Nt.render = qt), (Nt.__scopeId = 'data-v-29e3bbaa');
        var zt = Nt,
            St = {
                components: { Comments: zt },
                data: function() {
                    return {
                        uCheck: !1,
                        bid: this.$route.query.bid,
                        uid: '',
                        title: '',
                        nickname: '',
                        bregdate: '',
                        content: '',
                        comments: [],
                        form: '',
                    };
                },
                mounted: function() {
                    this.getOneBoard(), this.getComments();
                },
                methods: {
                    userCheck: function() {
                        this.$store.state.uid == this.uid && (this.uCheck = !0);
                    },
                    getOneBoard: function() {
                        var t = this;
                        this.$http
                            .get('http://localhost:8080/board/' + this.bid, {
                                headers: { Authorization: 'Bearer ' + this.$store.state.token },
                            })
                            .then(function(e) {
                                console.log(e),
                                    e.data.board
                                        ? ((t.title = e.data.board.title),
                                          (t.nickname = e.data.board.nickname),
                                          (t.bregdate = e.data.board.bregdate),
                                          (t.content = e.data.board.content.replace(/(\n)/g, '<br/>')),
                                          (t.uid = e.data.board.uid))
                                        : ((t.title = e.data.title),
                                          (t.nickname = e.data.nickname),
                                          (t.bregdate = e.data.bregdate),
                                          (t.content = e.data.content.replace(/(\n)/g, '<br/>')),
                                          (t.uid = e.data.user.uid)),
                                    t.userCheck();
                            })
                            .catch(function(t) {
                                console.log(t);
                            });
                    },
                    goList: function() {
                        this.$router.push({ path: '/board/list', query: this.body });
                    },
                    getComments: function() {
                        var t = this;
                        this.$http
                            .get('http://127.0.0.1:8080/comment/' + this.bid, {
                                headers: { Authorization: 'Bearer ' + this.$store.state.token },
                            })
                            .then(function(e) {
                                console.log(e.data), e.data.comments ? (t.comments = e.data.comments) : (t.comments = e.data);
                            })
                            .catch(function(t) {
                                console.log(t);
                            });
                    },
                    boardUpdate: function() {
                        var t = this;
                        if (!this.title) return alert('제목을 입력해 주세요'), void this.$refs.title.focus();
                        (this.form = { title: this.title, nickname: this.nickname, content: this.content, bregdate: this.bregdate }),
                            this.$http
                                .patch('http://localhost:8080/board/' + this.bid, this.form, {
                                    headers: { Authorization: 'Bearer ' + this.$store.state.token },
                                })
                                .then(function(e) {
                                    console.log(e),
                                        200 == e.status
                                            ? (alert('수정되었습니다.'), t.goList())
                                            : alert('실행중 실패했습니다.\n다시 이용해 주세요');
                                })
                                .catch(function(t) {
                                    console.log(t);
                                });
                    },
                    boardDelete: function() {
                        var t = this;
                        1 == confirm('정말 삭제하시겠습니까?') &&
                            this.$http
                                .delete('http://localhost:8080/board/' + this.bid, {
                                    headers: { Authorization: 'Bearer ' + this.$store.state.token },
                                })
                                .then(function(e) {
                                    200 == e.status
                                        ? (alert('삭제되었습니다.'), t.goList())
                                        : alert('실행중 실패했습니다.\n다시 이용해 주세요');
                                })
                                .catch(function(t) {
                                    console.log(t);
                                });
                    },
                },
            };
        n('0dce');
        (St.render = wt), (St.__scopeId = 'data-v-98ea3bca');
        var Tt = St,
            Ht = Object(c['D'])('data-v-042f1d04');
        Object(c['s'])('data-v-042f1d04');
        var Mt = Object(c['g'])('h1', null, '회원 가입', -1),
            Ft = { class: 'AddWrap' },
            Et = Object(c['g'])('span', null, '아이디 : ', -1),
            Rt = Object(c['g'])('span', null, '비밀번호 : ', -1),
            Jt = Object(c['g'])('span', null, '비밀번호 확인 : ', -1),
            Yt = Object(c['g'])('span', null, '닉네임 : ', -1),
            Gt = { class: 'btnWrap' };
        Object(c['q'])();
        var Xt = Ht(function(t, e, n, a, o, r) {
                return (
                    Object(c['p'])(),
                    Object(c['d'])('div', null, [
                        Mt,
                        Object(c['g'])('div', Ft, [
                            Object(c['g'])(
                                'form',
                                {
                                    class: 'join',
                                    onSubmit:
                                        e[5] ||
                                        (e[5] = function() {
                                            return r.checkForm && r.checkForm.apply(r, arguments);
                                        }),
                                },
                                [
                                    Object(c['g'])('p', null, [
                                        Et,
                                        Object(c['C'])(
                                            Object(c['g'])(
                                                'input',
                                                {
                                                    type: 'text',
                                                    'onUpdate:modelValue':
                                                        e[1] ||
                                                        (e[1] = function(t) {
                                                            return (o.username = t);
                                                        }),
                                                    ref: 'username',
                                                },
                                                null,
                                                512
                                            ),
                                            [[c['A'], o.username]]
                                        ),
                                    ]),
                                    Object(c['g'])('p', null, [
                                        Rt,
                                        Object(c['C'])(
                                            Object(c['g'])(
                                                'input',
                                                {
                                                    type: 'text',
                                                    'onUpdate:modelValue':
                                                        e[2] ||
                                                        (e[2] = function(t) {
                                                            return (o.password = t);
                                                        }),
                                                    ref: 'password',
                                                },
                                                null,
                                                512
                                            ),
                                            [[c['A'], o.password]]
                                        ),
                                    ]),
                                    Object(c['g'])('p', null, [
                                        Jt,
                                        Object(c['C'])(
                                            Object(c['g'])(
                                                'input',
                                                {
                                                    type: 'text',
                                                    'onUpdate:modelValue':
                                                        e[3] ||
                                                        (e[3] = function(t) {
                                                            return (o.password_check = t);
                                                        }),
                                                    ref: 'password_check',
                                                },
                                                null,
                                                512
                                            ),
                                            [[c['A'], o.password_check]]
                                        ),
                                    ]),
                                    Object(c['g'])('p', null, [
                                        Yt,
                                        Object(c['C'])(
                                            Object(c['g'])(
                                                'input',
                                                {
                                                    type: 'text',
                                                    'onUpdate:modelValue':
                                                        e[4] ||
                                                        (e[4] = function(t) {
                                                            return (o.nickname = t);
                                                        }),
                                                    ref: 'nickname',
                                                },
                                                null,
                                                512
                                            ),
                                            [[c['A'], o.nickname]]
                                        ),
                                    ]),
                                ],
                                32
                            ),
                        ]),
                        Object(c['g'])('div', Gt, [
                            Object(c['g'])(
                                'a',
                                {
                                    href: 'javascript:;',
                                    onClick:
                                        e[6] ||
                                        (e[6] = function() {
                                            return r.goHome && r.goHome.apply(r, arguments);
                                        }),
                                    class: 'btn',
                                },
                                '목록'
                            ),
                            Object(c['g'])(
                                'a',
                                {
                                    href: 'javascript:;',
                                    onClick:
                                        e[7] ||
                                        (e[7] = function() {
                                            return r.saveUser && r.saveUser.apply(r, arguments);
                                        }),
                                    class: 'btnAdd btn',
                                },
                                '가입완료'
                            ),
                        ]),
                    ])
                );
            }),
            Kt = {
                data: function() {
                    return { username: '', password: '', password_check: '', nickname: '', form: '' };
                },
                mounted: function() {},
                methods: {
                    checkForm: function(t) {
                        ('' != this.username && null != this.username) || this.errors.push('아이디를 입력해 주세요.'), t.preventDefault();
                    },
                    goHome: function() {
                        this.$router.push({ path: '/', query: this.body });
                    },
                    saveUser: function() {
                        var t = this;
                        (this.form = { username: this.username, password: this.password, nickname: this.nickname }),
                            this.$http
                                .post('http://localhost:8080/user/saveUser', this.form)
                                .then(function(e) {
                                    console.log(e), alert('회원가입에 성공했습니다.'), t.goHome();
                                })
                                .catch(function(t) {
                                    alert(t), console.log(t);
                                });
                    },
                },
            };
        n('e6a5');
        (Kt.render = Xt), (Kt.__scopeId = 'data-v-042f1d04');
        var Qt = Kt,
            Zt = Object(c['D'])('data-v-51db4771');
        Object(c['s'])('data-v-51db4771');
        var te = Object(c['g'])('span', null, '아이디 :', -1),
            ee = Object(c['g'])('span', null, '비밀번호 :', -1),
            ne = { class: 'btnWrap' };
        Object(c['q'])();
        var ce = Zt(function(t, e, n, a, o, r) {
                return (
                    Object(c['p'])(),
                    Object(c['d'])(
                        c['a'],
                        null,
                        [
                            Object(c['g'])('div', null, [
                                Object(c['g'])('form', null, [
                                    Object(c['g'])('p', null, [
                                        te,
                                        Object(c['C'])(
                                            Object(c['g'])(
                                                'input',
                                                {
                                                    class: 'username',
                                                    type: 'text',
                                                    'onUpdate:modelValue':
                                                        e[1] ||
                                                        (e[1] = function(t) {
                                                            return (o.username = t);
                                                        }),
                                                    ref: 'username',
                                                },
                                                null,
                                                512
                                            ),
                                            [[c['A'], o.username]]
                                        ),
                                    ]),
                                    Object(c['g'])('p', null, [
                                        ee,
                                        Object(c['C'])(
                                            Object(c['g'])(
                                                'input',
                                                {
                                                    class: 'password',
                                                    type: 'password',
                                                    'onUpdate:modelValue':
                                                        e[2] ||
                                                        (e[2] = function(t) {
                                                            return (o.password = t);
                                                        }),
                                                    ref: 'password',
                                                },
                                                null,
                                                512
                                            ),
                                            [[c['A'], o.password]]
                                        ),
                                    ]),
                                ]),
                            ]),
                            Object(c['g'])('div', ne, [
                                Object(c['g'])(
                                    'a',
                                    {
                                        href: 'javascript:;',
                                        onClick:
                                            e[3] ||
                                            (e[3] = function() {
                                                return r.goIndex && r.goIndex.apply(r, arguments);
                                            }),
                                        class: 'btn',
                                    },
                                    '취소'
                                ),
                                Object(c['g'])(
                                    'a',
                                    {
                                        href: 'javascript:;',
                                        onClick:
                                            e[4] ||
                                            (e[4] = function() {
                                                return r.login && r.login.apply(r, arguments);
                                            }),
                                        class: 'btnAdd btn',
                                    },
                                    '로그인'
                                ),
                            ]),
                        ],
                        64
                    )
                );
            }),
            ae = {
                data: function() {
                    return { form: '', username: '', password: '' };
                },
                mounted: function() {},
                methods: {
                    golist: function() {
                        this.$router.push({ path: '/board/list' });
                    },
                    goIndex: function() {
                        this.$router.push({ path: '/' });
                    },
                    login: function() {
                        var t = this;
                        this.username
                            ? this.password
                                ? ((this.form = { username: this.username, password: this.password }),
                                  console.log(this.form),
                                  this.$http
                                      .post('http://localhost:8080/user/login', this.form)
                                      .then(function(e) {
                                          console.log(e),
                                              (201 != e.status && 200 != e.status) || 'fail' == e.data.success
                                                  ? alert('아이디나 비밀번호가 틀렸습니다. 확인해주세요.')
                                                  : (t.$store.commit('setToken', e.data.access_token),
                                                    t.$store.commit('setLoginCheck', !0),
                                                    t.myInfo(),
                                                    t.golist());
                                      })
                                      .catch(function(t) {
                                          alert(t);
                                      }))
                                : (alert('비밀번호를 입력해 주세요.'), document.getElementsByClassName('password')[0].focus())
                            : (alert('아이디를 입력해 주세요.'), document.getElementsByClassName('username')[0].focus());
                    },
                    myInfo: function() {
                        var t = this;
                        this.$http
                            .get('http://localhost:8080/user/profile', { headers: { Authorization: 'Bearer ' + this.$store.state.token } })
                            .then(function(e) {
                                console.log(e),
                                    200 == e.status &&
                                        (t.$store.commit('setNickname', e.data.nickname), t.$store.commit('setUid', e.data.uid));
                            })
                            .catch(function(t) {
                                alert(t);
                            });
                    },
                },
            };
        n('4068');
        (ae.render = ce), (ae.__scopeId = 'data-v-51db4771');
        var oe = ae,
            re = Object(c['D'])('data-v-0c41572a');
        Object(c['s'])('data-v-0c41572a');
        var ie = { class: 'container' },
            se = Object(c['g'])('h2', null, ' 홈 페이지 입니다. ', -1),
            ue = Object(c['g'])(
                'div',
                null,
                [
                    Object(c['g'])('span', { id: 'login' }, [Object(c['g'])('a', { href: '/user/login' }, '로그인 ')]),
                    Object(c['g'])('span', { id: 'join' }, [Object(c['g'])('a', { href: '/user/join' }, '회원가입')]),
                ],
                -1
            );
        Object(c['q'])();
        var le = re(function(t, e, n, a, o, r) {
                return Object(c['p'])(), Object(c['d'])('div', ie, [se, ue]);
            }),
            de = { name: 'HelloWorld', props: { msg: String } };
        n('8240');
        (de.render = le), (de.__scopeId = 'data-v-0c41572a');
        var be = de,
            pe = Object(D['b'])(),
            he = Object(D['a'])({
                history: pe,
                routes: [
                    { path: '/', component: be },
                    { path: '/board/list', component: T },
                    { path: '/board/write', component: at },
                    { path: '/board/view', component: Tt },
                    { path: '/user/join', component: Qt },
                    { path: '/user/login', component: oe },
                ],
            }),
            ge = he,
            je = n('5502'),
            fe = n('0e44'),
            Oe = Object(je['a'])({
                plugins: [Object(fe['a'])()],
                state: { token: '', nickname: '', uid: '', loginCheck: !1 },
                mutations: {
                    setToken: function(t, e) {
                        t.token = e;
                    },
                    setNickname: function(t, e) {
                        t.nickname = e;
                    },
                    setUid: function(t, e) {
                        t.uid = e;
                    },
                    setLoginCheck: function(t, e) {
                        t.loginCheck = e;
                    },
                    resetState: function(t) {
                        (t.token = ''), (t.nickname = ''), (t.uid = ''), (t.loginCheck = !1);
                    },
                },
            }),
            me = Object(c['c'])(U);
        me.use(ge), me.use(a['a']), me.use(Oe), me.mount('#app');
    },
    '5e81': function(t, e, n) {},
    '5f2e': function(t, e, n) {
        'use strict';
        n('5205');
    },
    '5f32': function(t, e, n) {},
    '7fe2': function(t, e, n) {},
    8240: function(t, e, n) {
        'use strict';
        n('5f32');
    },
    '979c': function(t, e, n) {},
    a8cb: function(t, e, n) {},
    b388: function(t, e, n) {},
    d76a: function(t, e, n) {},
    e6a5: function(t, e, n) {
        'use strict';
        n('0215');
    },
});
//# sourceMappingURL=app.f4399299.js.map
