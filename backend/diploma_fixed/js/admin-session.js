(function(){
  'use strict';
  if (!location.pathname.toLowerCase().includes('admin')) return;

  // role тексеру — барлық мүмкін кілттерден
  const role = localStorage.getItem('role') ||
    (function(){ try{ return JSON.parse(localStorage.getItem('edu_auth')||'{}').role; }catch(e){return '';} })() ||
    (function(){ try{ return JSON.parse(localStorage.getItem('currentUser')||'{}').role; }catch(e){return '';} })() ||
    (function(){ try{ return JSON.parse(localStorage.getItem('edu_current_user')||'{}').role; }catch(e){return '';} })();

  if (role !== 'admin') {
    const loginUrl = location.pathname.replace(/admin\.html.*/,'login.html');
    location.replace(loginUrl);
    return;
  }

  // Sync session keys
  const email = localStorage.getItem('currentUserEmail') || 'admin@edubridge.com';
  const name  = localStorage.getItem('username') || 'Admin';
  const adminData = { id:'admin-local', name, fullname:name, email, role:'admin' };
  localStorage.setItem('edu_current_user', JSON.stringify(adminData));
  localStorage.setItem('currentUser',      JSON.stringify(adminData));
  localStorage.setItem('edu_auth',         JSON.stringify({ loggedIn:true, role:'admin', email }));
  localStorage.setItem('userRole',         'admin');
})();